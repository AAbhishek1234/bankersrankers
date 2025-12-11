import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

interface ToastState {
  toasts: Toast[];
}

let toastId = 0;
let listeners: Array<(state: ToastState) => void> = [];
let toastState: ToastState = { toasts: [] };

const notifyListeners = () => {
  listeners.forEach((listener) => listener(toastState));
};

export function toast({
  title,
  description,
  variant = "default",
}: {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}) {
  const id = String(toastId++);
  const newToast: Toast = { id, title, description, variant };

  toastState = { toasts: [...toastState.toasts, newToast] };
  notifyListeners();

  setTimeout(() => {
    toastState = { toasts: toastState.toasts.filter((t) => t.id !== id) };
    notifyListeners();
  }, 5000);

  return id;
}

export function Toaster() {
  const [state, setState] = useState<ToastState>(toastState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((l) => l !== setState);
    };
  }, []);

  const dismiss = (id: string) => {
    toastState = { toasts: toastState.toasts.filter((t) => t.id !== id) };
    notifyListeners();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-md">
      {state.toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "relative flex items-start gap-3 rounded-lg border p-4 shadow-lg animate-slide-up",
            toast.variant === "destructive"
              ? "bg-destructive text-destructive-foreground border-destructive"
              : "bg-card text-card-foreground border-border"
          )}
        >
          <div className="flex-1">
            {toast.title && (
              <div className="font-semibold text-sm">{toast.title}</div>
            )}
            {toast.description && (
              <div className="text-sm opacity-90 mt-1">{toast.description}</div>
            )}
          </div>
          <button
            onClick={() => dismiss(toast.id)}
            className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
