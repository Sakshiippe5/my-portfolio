const About = () => {
  return (
    <section id="about" className="py-20 px-8 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-16 text-center lg:text-left">About Me</h2>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-lg leading-relaxed text-textMuted">
          <p>
            Hey there! I'm Sakshi, a final-year Electronics & Telecommunication Engineering student at PVG's College of Engineering and Technology, Pune. 
            While my degree is in E&TC, I've fallen in love with full-stack web development and have been building real-world projects with the MERN stack since my second year.
          </p>
          <p>
            In summer 2025, I interned as a Jr. Product Developer at Vulnuris Security Solutions in Pune. There, I built an asset management module using React.js, TypeScript, PostgreSQL with Drizzle ORM, and Zustand for state management. 
            I migrated 15+ components from JavaScript to TypeScript (making the codebase safer and reducing bugs), used Docker for containerized development, and helped cut deployment issues by 30% through better testing with Postman.
          </p>
          <p>
            I thrive in agile environments—daily stand-ups, code reviews, and sprint planning taught me strong collaboration and communication skills.
          </p>
          <p>
            Beyond coding, I'm passionate about athletics! I've been part of my college team (2023-2025), represented PVGCOET in Pune University competitions (2023-24), and participated in multiple inter-college tournaments. 
            Running track has taught me resilience, teamwork, and how to perform under pressure—qualities I bring to every coding challenge.
          </p>
          <p>
            Academically, I'm maintaining a solid <span className="text-accent font-bold text-2xl">7.56/10 CGPA</span> while pursuing my B.E. (2022–2026).
          </p>
          <p className="text-xl text-textLight font-semibold">
            I'm actively looking for Full-Stack, Frontend, or Backend opportunities (2026 Batch). Let's build something awesome together!
          </p>
        </div>

        {/* Placeholder for your photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gradientStart to-gradientEnd p-2 rounded-3xl">
              <div className="bg-bgDark/80 rounded-3xl p-12 text-center">
                <p className="text-textLight text-2xl">Your Photo Here!<br /><span className="text-sm">(Add a professional headshot for extra impact)</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;