interface LineProps {
  length?: string;
  border?: string;
  color?: string;
  className?: string;
}

export default function Line({ 
  length = "w-full", 
  border = "border-t", 
  color = "border-gray-300",
  className = ""
}: LineProps) {
  return (
    <div 
      className={`${length} ${border} ${color} ${className}`}
    />
  );
}
