"use client";

import React, { useCallback, useState } from "react";
import { Upload, File, X, CheckCircle } from "lucide-react";

interface FileUploadProps {
  label?: string;
  accept?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  value?: File | null;
  onChange: (file: File | null) => void;
}

export default function FileUpload({
  label,
  accept = ".pdf,.jpg,.jpeg,.png",
  required,
  error,
  hint,
  value,
  onChange,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) onChange(file);
    },
    [onChange]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) onChange(file);
    },
    [onChange]
  );

  const handleRemove = useCallback(() => {
    onChange(null);
  }, [onChange]);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-main dark:text-white mb-2">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      {!value ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            relative flex flex-col items-center justify-center
            w-full h-36 px-6 py-8
            border-2 border-dashed rounded-xl
            transition-all cursor-pointer
            ${
              isDragging
                ? "border-primary bg-primary/5"
                : error
                ? "border-red-500 bg-red-50 dark:bg-red-900/10"
                : "border-border-default dark:border-gray-700 bg-gray-50 dark:bg-white/5 hover:border-primary hover:bg-primary/5"
            }
          `}
        >
          <input
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <Upload size={32} className="text-text-muted mb-2" />
          <p className="text-sm font-medium text-text-main dark:text-white">
            Drag & drop or <span className="text-primary">browse</span>
          </p>
          <p className="text-xs text-text-muted mt-1">PDF, JPG up to 10MB</p>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <CheckCircle size={20} className="text-green-600" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <File size={16} className="text-green-600" />
              <p className="text-sm font-medium text-green-800 dark:text-green-200 truncate">
                {value.name}
              </p>
            </div>
            <p className="text-xs text-green-600 mt-0.5">
              {(value.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1.5 hover:bg-green-100 dark:hover:bg-green-900/40 rounded-lg transition-colors"
          >
            <X size={18} className="text-green-700" />
          </button>
        </div>
      )}

      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      {hint && !error && <p className="mt-1.5 text-sm text-text-muted">{hint}</p>}
    </div>
  );
}
