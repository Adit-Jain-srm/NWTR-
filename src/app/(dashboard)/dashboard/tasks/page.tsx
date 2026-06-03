"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/motion/transitions";

const tasks = [
  { id: "1", title: "Verify KYC for Priya Sharma (Tier 2)", priority: "High", due: "Today", done: false },
  { id: "2", title: "Property inspection — 4BHK Whitefield", priority: "Medium", due: "Tomorrow", done: false },
  { id: "3", title: "Follow up with Ravi Patel on document upload", priority: "High", due: "Today", done: false },
  { id: "4", title: "Schedule viewing — 3BHK Sarjapur for Aditya", priority: "Low", due: "Jun 5", done: true },
  { id: "5", title: "Prepare quarterly client review report", priority: "Medium", due: "Jun 7", done: false },
];

export default function TasksPage() {
  const [taskList, setTaskList] = useState(tasks);

  function toggleTask(id: string) {
    setTaskList(taskList.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  const pending = taskList.filter(t => !t.done).length;

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <Heading level={2}>Tasks</Heading>
            <Text muted className="mt-1">{pending} pending tasks</Text>
          </div>
          <Button variant="primary" size="sm">+ New Task</Button>
        </div>

        <div className="space-y-2">
          {taskList.map((task) => (
            <Card key={task.id} padding="none" className="!p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded-md border-navy-300 dark:border-navy-600 accent-gold-500"
                  />
                  <div>
                    <Text size="sm" weight="medium" className={task.done ? "line-through !text-navy-400" : "!text-navy-900 dark:!text-white"}>
                      {task.title}
                    </Text>
                    <Text size="xs" muted className="mt-0.5">Due: {task.due}</Text>
                  </div>
                </div>
                <Badge variant={task.priority === "High" ? "danger" : task.priority === "Medium" ? "warning" : "default"}>
                  {task.priority}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
