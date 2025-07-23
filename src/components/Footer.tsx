import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/8a257c1b-5860-4eb7-bd18-88edc81dee3c.png" 
                alt="Technology Innovation for AI" 
                className="h-8 w-8 mr-3"
              />
              <span className="text-lg font-bold bg-gradient-ai bg-clip-text text-transparent">
                Technology Innovation for AI
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering businesses with cutting-edge AI solutions. We transform your vision 
              into intelligent reality through expert consultation and innovative technology.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Email: cto@tiai.com</p>
              <p>Phone: +966 (50) 088-1999</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-ai-magenta transition-colors">AI Analytics</a></li>
              <li><a href="#services" className="hover:text-ai-magenta transition-colors">Voice & Text Chat</a></li>
              <li><a href="#services" className="hover:text-ai-magenta transition-colors">Image Detection</a></li>
              <li><a href="#contact" className="hover:text-ai-magenta transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-ai-magenta transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-ai-magenta transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-ai-magenta transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-ai-magenta transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Technology Innovation for Artificial Intelligence. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Powered by innovation, driven by intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
