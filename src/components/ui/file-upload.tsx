"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onUpload?: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
  maxSize?: number;
  className?: string;
}

export function FileUpload({
  onUpload,
  accept = "image/*,.pdf",
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024,
  className,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(newFiles: FileList | null) {
    if (!newFiles) return;
    setError(null);

    const fileArray = Array.from(newFiles);
    if (files.length + fileArray.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const oversized = fileArray.find((f) => f.size > maxSize);
    if (oversized) {
      setError(`File "${oversized.name}" exceeds ${Math.round(maxSize / 1024 / 1024)}MB limit`);
      return;
    }

    const updated = [...files, ...fileArray];
    setFiles(updated);
    onUpload?.(updated);
  }

  function removeFile(index: number) {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onUpload?.(updated);
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer",
          dragActive
            ? "border-gold-500 bg-gold-50/50 dark:bg-gold-500/10"
            : "border-navy-200 dark:border-navy-600 hover:border-gold-400"
        )}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div className="text-3xl mb-2">📄</div>
        <p className="text-sm font-medium text-navy-700 dark:text-navy-200">
          Drag & drop files here, or click to browse
        </p>
        <p className="text-xs text-navy-400 mt-1">
          PDF, JPG, PNG up to {Math.round(maxSize / 1024 / 1024)}MB each · Max {maxFiles} files
        </p>
      </div>

      {error && (
        <p className="text-xs text-red-500 font-medium">{error}</p>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, i) => (
            <div key={`${file.name}-${i}`} className="flex items-center justify-between px-4 py-2 bg-navy-50 dark:bg-navy-800 rounded-lg">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-sm">📎</span>
                <span className="text-sm text-navy-700 dark:text-navy-200 truncate">{file.name}</span>
                <span className="text-xs text-navy-400">{(file.size / 1024).toFixed(0)}KB</span>
              </div>
              <button
                onClick={() => removeFile(i)}
                className="text-navy-400 hover:text-red-500 text-sm transition-colors flex-shrink-0"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
