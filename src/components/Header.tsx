import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8a257c1b-5860-4eb7-bd18-88edc81dee3c.png" 
              alt="Technology Innovation for AI" 
              className="h-10 w-10 mr-3"
            />
            <span className="text-xl font-bold bg-gradient-ai bg-clip-text text-transparent">
              TIAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-ai-magenta transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-ai-magenta transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-ai-magenta transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-ai-magenta transition-colors">Contact</a>
            <Button variant="ai">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-foreground hover:text-ai-magenta transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-ai-magenta transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-ai-magenta transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-ai-magenta transition-colors">Contact</a>
              <Button variant="ai" className="w-fit">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;