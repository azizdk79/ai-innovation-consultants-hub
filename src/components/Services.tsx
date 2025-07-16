import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, MessageSquare, Eye, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "AI Analytics",
      description: "Unlock the power of your data with our advanced AI analytics solutions. We help businesses make data-driven decisions through predictive modeling, pattern recognition, and intelligent insights.",
      features: [
        "Predictive Analytics",
        "Data Visualization",
        "Business Intelligence",
        "Custom Dashboards"
      ]
    },
    {
      icon: MessageSquare,
      title: "AI Voice & Text Chat",
      description: "Create engaging customer experiences with our conversational AI solutions. From chatbots to voice assistants, we build intelligent interfaces that understand and respond naturally.",
      features: [
        "Natural Language Processing",
        "Voice Recognition",
        "Chatbot Development",
        "Multi-language Support"
      ]
    },
    {
      icon: Eye,
      title: "Face & Image Detection",
      description: "Leverage computer vision technology for sophisticated image analysis. Our solutions enable face recognition, object detection, and automated visual content processing.",
      features: [
        "Face Recognition",
        "Object Detection",
        "Image Classification",
        "Real-time Processing"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-ai bg-clip-text text-transparent">AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI consultation services designed to transform your business operations 
            and unlock new possibilities through artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-ai transition-all duration-300 border-border hover:border-ai-magenta/50">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gradient-ai rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-ai rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ai-outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <Button variant="ai" size="lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;