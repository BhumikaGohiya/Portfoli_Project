import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-medium mb-4">Get in touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's work together<span className="text-gradient">.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-foreground">hello@alexrivera.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-2xl p-8 border border-border">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send message <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
