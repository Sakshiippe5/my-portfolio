import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 gap-12 bg-bgDark"
    >
      {/* Left Side */}
      <div className="space-y-12 text-center lg:text-left">
        <div>
          <h1 className="text-6xl lg:text-8xl font-bold">Sakshi Ippe</h1>
          <p className="text-3xl lg:text-4xl text-accent mt-4">
            Full-Stack Developer & Data Analyst
          </p>
          <p className="text-xl text-textMuted mt-2">
            React • Node.js • PostgreSQL • SQL • Python • Power BI
          </p>
        </div>

        <a
          href="/sakshi_ippe_resume.pdf"
          download="Sakshi_Ippe_Resume.pdf"
          className="inline-block bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-bold text-xl px-12 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition shadow-lg"
        >
          Get Resume
        </a>

        {/* Sidebar Navigation */}
        <nav className="space-y-4">
          {['ABOUT', 'EXPERIENCE', 'PROJECTS', 'SKILLS', 'CERTIFICATIONS', 'CONTACT'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-textMuted hover:text-white hover:border-l-4 hover:border-accent pl-6 py-2 transition text-lg"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start space-x-8">
          <a
            href="https://github.com/Sakshiippe5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-accent transition"
          >
            <Github strokeWidth={1.5} />
          </a>
          <a
            href="https://linkedin.com/in/sakshi-ippe-74a459289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-accent transition"
          >
            <Linkedin strokeWidth={1.5} />
          </a>
          <a href="mailto:sakshiippe05@gmail.com" className="text-4xl hover:text-accent transition">
            <Mail strokeWidth={1.5} />
          </a>
          <a href="tel:+919356784051" className="text-4xl hover:text-accent transition">
            <Phone strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Right Side: Summary */}
      <div className="max-w-2xl text-lg lg:text-xl leading-relaxed text-textMuted">
        <p>
          Final-year engineering student with hands-on experience in 
          <span className="text-textLight font-semibold"> full-stack web development</span> 
          and a growing focus on <span className="text-textLight font-semibold">data analytics</span>.
          I build responsive applications and analyze data to support data-driven decisions.
        </p>

        <p className="mt-6">
          Skilled in developing web applications using React, Node.js, and PostgreSQL, and 
          performing data analysis with SQL and Python (Pandas). Experienced in creating 
          interactive dashboards and extracting insights using Power BI.
        </p>

        <p className="mt-8 font-semibold text-textLight">
          Open to Full-Stack, Frontend, Backend, and Data Analytics roles — 2026 Batch
        </p>
      </div>
    </section>
  );
};

export default Hero;
