interface EmailBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function EmailBox({ placeholder, value, onChange }: EmailBoxProps) {
  return (
    <div className="relative">
      <input 
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-[300px] px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-300 bg-white"
      />
    </div>
  )
}