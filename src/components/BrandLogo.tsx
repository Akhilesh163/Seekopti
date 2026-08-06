import { cn } from "@/lib/utils";
import seekYourYLogo from "@/assets/seekyoury_logo_favicon.png";

type BrandLogoProps = {
  className?: string;
  /** Slightly larger mark for hero-style placements */
  size?: "nav" | "lg" | "custom";
  /** onLight: white header (blend removes black PNG bg). onDark: navy footer. */
  variant?: "onLight" | "onDark";
};

export function BrandLogo({ className, size = "nav", variant = "onLight" }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3 font-semibold tracking-wide", className)}>
      <img
        src={seekYourYLogo}
        alt="Seek Your Y"
        className={cn(
          "w-auto object-contain",
          size === "nav" && "h-10 md:h-16",
          size === "lg" && "h-10 md:h-20",
        )}
      />
      <span className={cn("text-xl md:text-2xl font-black tracking-tight", variant === "onDark" ? "text-white" : "text-slate-900")}>Seek Your Y</span>
    </div>
  );
}
