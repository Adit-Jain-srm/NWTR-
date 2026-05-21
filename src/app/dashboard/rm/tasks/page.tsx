"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: number;
  task: string;
  priority: "High" | "Medium" | "Low";
  due: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: 1, task: "Complete KYC verification for Ankit Patel", priority: "High", due: "May 22, 2026", completed: false },
  { id: 2, task: "Schedule property visit — Sobha Dream Acres with Neha Gupta", priority: "High", due: "May 23, 2026", completed: false },
  { id: 3, task: "Follow up on lease agreement signing — Rahul Sharma", priority: "Medium", due: "May 24, 2026", completed: false },
  { id: 4, task: "Submit property valuation report — Brigade Metropolis", priority: "Medium", due: "May 25, 2026", completed: false },
  { id: 5, task: "Update client onboarding docs for Mrs. Sunita Reddy", priority: "Low", due: "May 28, 2026", completed: false },
];

function getPriorityVariant(priority: string) {
  switch (priority) {
    case "High": return "warning" as const;
    case "Medium": return "premium" as const;
    case "Low": return "default" as const;
    default: return "default" as const;
  }
}

export default function RMTasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">Tasks</h1>
        <p className="mt-1 text-navy-500">
          {tasks.filter((t) => !t.completed).length} remaining tasks
        </p>
      </div>

      <Card>
        <div className="divide-y divide-navy-50">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-4 px-6 py-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4 rounded border-navy-300 text-gold-500 focus:ring-gold-500"
              />
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${task.completed ? "text-navy-400 line-through" : "text-navy-700"}`}>
                  {task.task}
                </p>
                <p className="text-xs text-navy-400 mt-0.5">Due: {task.due}</p>
              </div>
              <Badge variant={getPriorityVariant(task.priority)}>{task.priority}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
