interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ label, icon, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 bg-aether-primary px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-300 font-medium w-[300px] justify-center"
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