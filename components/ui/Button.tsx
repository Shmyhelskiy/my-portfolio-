import { cn } from "@/lib/utils/cn";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export function Button({
  className,
  onClick,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "size-8 rounded-xl flex items-center justify-center bg-primary-muted hover:bg-primary-muted-hover cursor-pointer transition-colors",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
