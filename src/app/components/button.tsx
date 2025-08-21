interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ label, icon, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg border border-white/30 hover:bg-white/30 hover:border-white/40 active:bg-white/15 transition-all duration-300 font-medium w-full justify-center shadow-lg text-lg"
    >
      <span>{label}</span>
      {icon || (
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      )}
    </button>
  )
}