import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "AI Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to democratizing AI technology and making it accessible to businesses of all sizes."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve, constantly exploring new AI technologies and methodologies."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust and results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and drive real business value."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-ai bg-clip-text text-transparent">TIAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking AI consultancy dedicated to helping businesses harness 
            the transformative power of artificial intelligence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-ai bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Pioneering the Future of 
              <span className="bg-gradient-ai bg-clip-text text-transparent"> AI Innovation</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              At Technology Innovation for Artificial Intelligence, we believe that AI should be a 
              catalyst for growth, not a barrier to entry. Our team of experienced AI engineers, 
              data scientists, and business strategists work together to deliver solutions that 
              are both technically sophisticated and business-practical.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              From startups to enterprise organizations, we've helped companies across industries 
              implement AI solutions that drive efficiency, enhance customer experiences, and 
              unlock new revenue opportunities.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Deep Learning</Badge>
              <Badge variant="secondary">Computer Vision</Badge>
              <Badge variant="secondary">NLP</Badge>
              <Badge variant="secondary">Data Science</Badge>
              <Badge variant="secondary">MLOps</Badge>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-ai rounded-2xl blur-xl opacity-20"></div>
            <Card className="relative border-ai-magenta/20">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">Our Expertise</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-ai rounded-full mr-3"></div>
                    Custom AI Model Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-ai rounded-full mr-3"></div>
                    AI Strategy & Consulting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-ai rounded-full mr-3"></div>
                    Data Engineering & Pipeline
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-ai rounded-full mr-3"></div>
                    AI Infrastructure & Deployment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-ai rounded-full mr-3"></div>
                    Training & Knowledge Transfer
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-ai transition-all duration-300 border-border hover:border-ai-magenta/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;