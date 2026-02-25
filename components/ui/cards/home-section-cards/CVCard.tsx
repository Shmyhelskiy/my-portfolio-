import { FileText, Download } from "lucide-react";

export default function CVCard() {
  return (
    <a
      href="/cv.pdf"
      download
      className="holographic-card md:col-span-2 bg-card rounded-2xl size-fit p-4 flex flex-row items-center justify-between gap-3 shadow-card border border-border/50 hover:scale-[1.03] active:scale-95 transition-all group overflow-hidden"
    >
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <FileText size={20} />
        </div>
        <p className="font-medium">Download CV</p>
      </div>
      <Download
        size={18}
        className="text-muted-foreground group-hover:text-primary transition-colors "
      />
    </a>
  );
}
