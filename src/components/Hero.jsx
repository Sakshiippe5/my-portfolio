import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 gap-12 bg-bgDark"
    >
      {/* LEFT SIDE */}
      <div className="space-y-12 text-center lg:text-left lg:min-w-[400px]">
        
        {/* Name + Title */}
        <div>
          <h1 className="text-6xl lg:text-7xl font-bold whitespace-nowrap">
            Sakshi Ippe
          </h1>

          <p className="text-2xl lg:text-3xl text-accent mt-4 whitespace-nowrap">
            Full-Stack Developer & AI/ML Engineer
          </p>

          <p className="text-base lg:text-lg text-textMuted mt-2">
            Next.js • React • Node.js • FastAPI • PostgreSQL • Python • LLMs • RAG
          </p>
        </div>

        {/* Resume Button */}
        <a
          href="/certificates/Sakshi_Ippe_Resume.pdf"
          download="Sakshi_Ippe_Resume.pdf"
          className="inline-block bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-bold text-xl px-12 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition shadow-lg"
        >
          Get Resume
        </a>

        {/* Navigation */}
        <nav className="space-y-4">
          {[
            "ABOUT",
            "EXPERIENCE",
            "PROJECTS",
            "SKILLS",
            "CERTIFICATIONS",
            "CONTACT",
          ].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-textMuted hover:text-white hover:border-l-4 hover:border-accent pl-6 py-2 transition text-lg"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Links */}
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

          <a
            href="mailto:sakshiippe05@gmail.com"
            className="text-4xl hover:text-accent transition"
          >
            <Mail strokeWidth={1.5} />
          </a>

          <a
            href="tel:+919356784051"
            className="text-4xl hover:text-accent transition"
          >
            <Phone strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="max-w-lg text-lg lg:text-xl leading-relaxed text-textMuted">
        <p>
          Final-year E&TC engineering student with hands-on experience in{" "}
          <span className="text-textLight font-semibold">
            full-stack web development
          </span>{" "}
          and{" "}
          <span className="text-textLight font-semibold">
            AI/ML engineering
          </span>{" "}
          — building RAG pipelines, LLM-integrated apps, and real-time systems.
        </p>

        <p className="mt-6">
          I work across the stack: Next.js + FastAPI + PostgreSQL on the backend,
          React + TypeScript on the frontend, and Groq/Llama-3 + Qdrant +
          LangChain for AI features. Experienced with Docker, WebSockets, and
          agent-based development workflows.
        </p>

        <p className="mt-8 font-semibold text-textLight">
          Open to Full-Stack, Frontend, Backend, and AI/ML Engineering roles —
          2026 Batch
        </p>
      </div>
    </section>
  );
};

export default Hero;