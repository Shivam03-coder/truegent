"use client";

import { toast } from "sonner";

interface ToastProps {
  title: string;
  description?: string;
}

export const useAppToasts = () => {
  const commonClasses = `
    px-4 sm:px-6 py-3 sm:py-4 
    text-sm sm:text-base 
    whitespace-normal 
    rounded-xl 
    shadow-xl 
    backdrop-blur-md 
    max-w-[90vw] sm:max-w-md 
    font-medium 
    break-words
  `;

  const SuccessToast = ({ title, description }: ToastProps) => {
    toast.success(title, {
      description,
      unstyled: true,
      className: `bg-green-950 flex items-start gap-x-2 border border-green-800 text-green-300 ${commonClasses}`,
      duration: 5000,
    });
  };

  const ErrorToast = ({ title, description }: ToastProps) => {
    toast.error(title, {
      description,
      unstyled: true,
      className: `bg-red-950 flex items-start gap-x-2 border border-red-800 text-red-300 ${commonClasses}`,
      duration: 5000,
    });
  };

  const WarningToast = ({ title, description }: ToastProps) => {
    toast.warning(title, {
      description,
      unstyled: true,
      className: `bg-yellow-950 flex items-start gap-x-2 border border-yellow-800 text-yellow-300 ${commonClasses}`,
      duration: 5000,
    });
  };

  return { SuccessToast, ErrorToast, WarningToast };
};
