import Link from "next/link";

interface AeriumLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function AeriumLogo({ 
  className = "", 
  size = "md"
}: AeriumLogoProps) {
  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl md:text-3xl",
    lg: "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
  };

  return (
    <Link 
      href="https://joinaerium.com" 
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
      aria-label="Aerium Home"
    >
      <h1 className={`text-black leading-tight font-bold ${sizeClasses[size]}`}>
        AERIUM
      </h1>
    </Link>
  );
}
