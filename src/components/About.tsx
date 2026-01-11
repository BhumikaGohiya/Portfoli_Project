const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python",
    "Figma", "Tailwind CSS", "Next.js", "PostgreSQL"
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium mb-4">About me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Passionate about creating impactful digital products
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over 5 years of experience in web development and design, I specialize 
                in building modern, performant applications that users love.
              </p>
              <p>
                I believe in the power of clean code and thoughtful design to solve real 
                problems and create meaningful experiences for users around the world.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-display text-4xl font-bold text-gradient">50+</p>
                <p className="text-muted-foreground mt-1">Projects</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-gradient">5+</p>
                <p className="text-muted-foreground mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-gradient">30+</p>
                <p className="text-muted-foreground mt-1">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
