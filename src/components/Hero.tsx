import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="animate-fade-up">
          <p className="text-primary font-medium mb-4">Hello, I'm</p>
        </div>
        <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Bhumika Gohiya<span className="text-gradient">.</span>
        </h1>
        <p className="animate-fade-up-delay-2 text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
          QA Automation Engineer with 4+ years of experience in Selenium, Java, API Testing & CI/CD pipelines.
        </p>
        <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View my work
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
