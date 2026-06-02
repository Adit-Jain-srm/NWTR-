"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFiles: (files: File[]) => void;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  files?: File[];
  onRemove?: (index: number) => void;
  className?: string;
  label?: string;
}

export function FileUpload({
  onFiles,
  accept = { "image/*": [".jpg", ".png"], "application/pdf": [".pdf"] },
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024,
  files = [],
  onRemove,
  className,
  label,
}: FileUploadProps) {
  const onDrop = useCallback((accepted: File[]) => onFiles(accepted), [onFiles]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept,
    maxFiles: maxFiles - files.length,
    maxSize,
  });

  return (
    <div className={cn("w-full", className)}>
      {label && <p className="text-sm font-medium text-navy-700 dark:text-navy-200 mb-2">{label}</p>}

      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors",
          isDragActive
            ? "border-gold-500 bg-gold-50/50 dark:bg-gold-500/5"
            : "border-navy-200 dark:border-navy-700 hover:border-gold-400 dark:hover:border-gold-500/50"
        )}
      >
        <input {...getInputProps()} />
        <div className="text-3xl mb-2">📄</div>
        <p className="text-sm font-medium text-navy-700 dark:text-navy-200">
          {isDragActive ? "Drop files here..." : "Drag & drop files, or click to browse"}
        </p>
        <p className="text-xs text-navy-400 mt-1">
          PDF, JPG, PNG up to {Math.round(maxSize / 1024 / 1024)}MB · Max {maxFiles} files
        </p>
      </div>

      {fileRejections.length > 0 && (
        <p className="mt-2 text-xs text-red-500">
          {fileRejections[0].errors[0].message}
        </p>
      )}

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, i) => (
            <li key={`${file.name}-${i}`} className="flex items-center justify-between px-3 py-2 bg-navy-50 dark:bg-navy-800 rounded-lg">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm shrink-0">📎</span>
                <span className="text-sm text-navy-700 dark:text-navy-200 truncate">{file.name}</span>
                <span className="text-xs text-navy-400 shrink-0">{(file.size / 1024).toFixed(0)}KB</span>
              </div>
              {onRemove && (
                <button onClick={() => onRemove(i)} className="text-navy-400 hover:text-red-500 transition-colors text-lg leading-none" aria-label={`Remove ${file.name}`}>
                  ×
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
