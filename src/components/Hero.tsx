import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-ai-magenta/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ai-cyan/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/8a257c1b-5860-4eb7-bd18-88edc81dee3c.png" 
            alt="Technology Innovation for AI" 
            className="h-32 w-32 mx-auto mb-6 drop-shadow-glow"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-ai bg-clip-text text-transparent">
            Technology Innovation
          </span>
          <br />
          <span className="text-foreground">for Artificial Intelligence</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge AI solutions. From analytics to conversational AI, 
          we transform your vision into intelligent reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="ai" size="lg" className="group">
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="ai-outline" size="lg">
            Explore Services
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analytics</h3>
            <p className="text-muted-foreground">Transform data into actionable insights with advanced AI analytics</p>
          </div>

          <div className="group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Voice & Text AI</h3>
            <p className="text-muted-foreground">Engage customers with intelligent conversational interfaces</p>
          </div>

          <div className="group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Image Detection</h3>
            <p className="text-muted-foreground">Advanced computer vision for face and object recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;