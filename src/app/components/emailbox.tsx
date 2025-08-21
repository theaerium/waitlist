interface EmailBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function EmailBox({ placeholder, value, onChange }: EmailBoxProps) {
  return (
    <div className="relative w-full">
      <input 
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-white/40 focus:outline-none transition-all duration-300 bg-white/10 backdrop-blur-md text-white placeholder-white/60 shadow-lg text-lg"
      />
    </div>
  )
}