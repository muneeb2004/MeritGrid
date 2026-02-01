"use client";

import React, { useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import { updateProfilePhoto } from "@/app/actions/profile";

interface ProfilePhotoUploadProps {
  currentImage: string;
  onUploadComplete?: (newUrl: string) => void;
}

export default function ProfilePhotoUpload({
  currentImage,
  onUploadComplete,
}: ProfilePhotoUploadProps) {
  const [image, setImage] = useState(currentImage);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);

    try {
      // Compress image if larger than 1MB
      let processedFile = file;
      if (file.size > 1024 * 1024) {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        };
        processedFile = await imageCompression(file, options);
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(processedFile);

      // Upload to server
      const formData = new FormData();
      formData.append("file", processedFile);

      const response = await fetch("/api/upload/avatar", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      // Update database with new URL
      const result = await updateProfilePhoto(data.url);
      if (!result.success) {
        throw new Error(result.error || "Failed to save photo");
      }

      setImage(data.url);
      onUploadComplete?.(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
      setImage(currentImage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative">
      <div
        className="h-28 w-28 rounded-full border-4 border-white dark:border-slate-800 shadow-lg bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full">
            <div className="size-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white dark:border-slate-800 shadow-md cursor-pointer hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        <span className="material-symbols-outlined !text-sm">
          {uploading ? "hourglass_empty" : "edit"}
        </span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileSelect}
        className="hidden"
      />
      {error && (
        <p className="absolute -bottom-6 left-0 right-0 text-center text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
