const About = () => {
  return (
    <section id="about" className="py-20 px-8 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-16 text-center lg:text-left">About Me</h2>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-lg leading-relaxed text-textMuted">
  <p>
    Hi, I’m Sakshi - a final-year Electronics & Telecommunication Engineering student at 
    PVG’s College of Engineering and Technology, Pune, with a strong interest in 
    <span className="text-textLight font-semibold"> Full-Stack Web Development</span> 
    and <span className="text-textLight font-semibold"> Data Analytics</span>.
  </p>

  <p>
    I build scalable web applications using 
    <span className="text-textLight font-semibold"> React, TypeScript, Node.js, and PostgreSQL</span>, 
    and work with <span className="text-textLight font-semibold">SQL, Python (Pandas)</span> 
    and <span className="text-textLight font-semibold">Power BI</span> to analyze data and create insights-driven dashboards.
  </p>

  <p>
    As a Jr. Product Developer Intern at Vulnuris Security Solutions, I worked on an asset management module, 
    migrated components from JavaScript to TypeScript, and strengthened API testing workflows, 
    helping improve code quality and deployment stability.
  </p>

  <p>
    I’m an athlete as well-representing my college in university-level competitions—which has shaped my 
    discipline, teamwork, and ability to perform under pressure.
  </p>

  <p className="text-xl text-textLight font-semibold">
    Actively seeking Full-Stack, Frontend, Backend, or Data Analytics roles (2026 Batch).
  </p>
</div>


        {/* Placeholder for your photo */}
        {/* Your Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gradientStart to-gradientEnd p-3 rounded-full shadow-2xl">
              <img 
                src="/certificates/photo.jpg" 
                alt="Sakshi Ippe - Full-Stack Developer" 
                className="w-80 h-80 object-cover rounded-full border-8 border-bgDark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;