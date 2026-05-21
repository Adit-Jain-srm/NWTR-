"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: crypto.randomUUID(), role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      abortRef.current = new AbortController();
      const res = await fetch("/api/v1/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages.map(m => ({ role: m.role, content: m.content })) }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) throw new Error("Failed to get response");
      
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      const assistantId = crypto.randomUUID();
      let assistantContent = "";

      setMessages(prev => [...prev, { id: assistantId, role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantContent += decoder.decode(value, { stream: true });
          setMessages(prev => prev.map(m => m.id === assistantId ? { ...m, content: assistantContent } : m));
        }
      }
    } catch {
      setMessages(prev => [...prev, { id: crypto.randomUUID(), role: "assistant", content: "Sorry, I couldn't process that request. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold-500 text-navy-900 shadow-gold flex items-center justify-center hover:bg-gold-400 transition-all duration-200"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <span className="text-xl">×</span> : <span className="text-lg">💬</span>}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[500px] rounded-2xl bg-white border border-navy-100 shadow-elevated flex flex-col overflow-hidden">
          <div className="px-5 py-4 border-b border-navy-100 bg-navy-900">
            <h3 className="text-sm font-display font-bold text-white">NWTR Assistant</h3>
            <p className="text-xs text-navy-300 mt-0.5">Ask about properties, deposits, or how NWTR works</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-sm text-navy-400">Hi! How can I help you today?</p>
                <div className="mt-4 space-y-2">
                  {["How does NWTR work?", "Is my deposit safe?", "3BHK in Koramangala"].map((q) => (
                    <button key={q} onClick={() => setInput(q)} className="block w-full text-left text-xs px-3 py-2 rounded-lg border border-navy-100 hover:border-gold-300 hover:bg-gold-50/50 transition-colors text-navy-600">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className={cn("max-w-[85%] rounded-xl px-4 py-2.5 text-sm whitespace-pre-wrap", msg.role === "user" ? "ml-auto bg-gold-500 text-navy-900" : "bg-navy-50 text-navy-800")}>
                {msg.content}
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="bg-navy-50 rounded-xl px-4 py-2.5 text-sm text-navy-400 max-w-[85%]">
                <span className="animate-pulse">Thinking...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-navy-100 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything..." className="flex-1 text-sm px-4 py-2.5 rounded-lg border border-navy-200 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400" />
            <Button type="submit" variant="primary" size="sm" disabled={isLoading || !input.trim()}>
              Send
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
