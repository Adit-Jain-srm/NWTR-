"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "How does NWTR work?",
  "Calculate deposit for ₹1Cr property",
  "Find 3BHK in Koramangala",
  "Is my deposit safe?",
];

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function send(text?: string) {
    const msg = text || input;
    if (!msg.trim() || loading) return;

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: msg };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/v1/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated.map(m => ({ role: m.role, content: m.content })) }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      const assistantId = crypto.randomUUID();
      let content = "";

      setMessages(prev => [...prev, { id: assistantId, role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          content += decoder.decode(value, { stream: true });
          setMessages(prev => prev.map(m => m.id === assistantId ? { ...m, content } : m));
        }
      }
    } catch {
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: "assistant", content: "I'm unable to respond right now. Please ensure the OpenAI API key is configured." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold-500 text-navy-900 shadow-gold flex items-center justify-center hover:bg-gold-400 hover:shadow-gold-lg transition-all duration-200 active:scale-95"
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
      >
        <span className="text-xl">{open ? "×" : "💬"}</span>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[400px] max-h-[560px] rounded-2xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-navy-100 dark:border-navy-800 bg-navy-900 dark:bg-navy-950">
              <h3 className="text-sm font-display font-bold text-white">NWTR AI Assistant</h3>
              <p className="text-xs text-navy-400 mt-0.5">Ask about properties, deposits, or how NWTR works</p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[360px]">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-sm text-navy-400 dark:text-navy-500 mb-4">How can I help you today?</p>
                  <div className="space-y-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="block w-full text-left text-xs px-3 py-2.5 rounded-lg border border-navy-100 dark:border-navy-700 hover:border-gold-300 dark:hover:border-gold-500/30 hover:bg-gold-50/50 dark:hover:bg-gold-500/5 transition-colors text-navy-600 dark:text-navy-300"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "max-w-[85%] rounded-xl px-4 py-2.5 text-sm whitespace-pre-wrap",
                    msg.role === "user"
                      ? "ml-auto bg-gold-500 text-navy-900"
                      : "bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-navy-200"
                  )}
                >
                  {msg.content || (loading && msg.role === "assistant" ? "Thinking..." : "")}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="p-3 border-t border-navy-100 dark:border-navy-800 flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 text-sm px-4 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 dark:bg-navy-800 dark:text-white focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
                disabled={loading}
              />
              <Button type="submit" variant="primary" size="sm" disabled={loading || !input.trim()}>
                Send
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
