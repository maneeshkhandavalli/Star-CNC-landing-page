import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium text-sm px-6 py-3 rounded transition-all duration-200 cursor-pointer";
  const variants: Record<Variant, string> = {
    primary: "bg-orange text-white hover:bg-orange-dark hover:scale-105 hover:shadow-lg hover:shadow-orange/25",
    outline: "border border-teal text-teal hover:bg-teal hover:text-white",
    ghost: "text-teal hover:bg-teal/10",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) return <a href={href} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>} className={cls}>{children}</a>;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
