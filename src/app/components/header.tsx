import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-black border-1 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <Link href="/new-version" className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image src="/brand/logo.png" alt="Aerium" width={90} height={30} className="w-auto h-auto" />
            </div>
          </Link>

          {/* Navigation links and button */}
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a 
                href="#process" 
                className="text-black font-medium uppercase tracking-wide hover:text-gray-700 transition-colors relative group"
              >
                OUR PROCESS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-400"></span>
              </a>
              <a 
                href="#items" 
                className="text-black font-medium uppercase tracking-wide hover:text-gray-700 transition-colors relative group"
              >
                ITEMS WE LOOK FOR
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-400"></span>
              </a>
            </nav>
            
            <Button 
              label="REQUEST ACCESS" 
              className="bg-aether-primary hover:bg-aether-primary/80"
            />
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}