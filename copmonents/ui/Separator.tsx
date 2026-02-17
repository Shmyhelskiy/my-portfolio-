import { cn } from "@/utils/cn";

export default function Separator({ className }: { className?: string }) {
  return <div className={cn("w-px h-6 bg-border-hight", className)} />;
}
