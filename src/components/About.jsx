const About = () => {
  return (
    <section id="about" className="py-20 px-8 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-16 text-center lg:text-left">About Me</h2>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-lg leading-relaxed text-textMuted">
          <p>
            Hi, I'm Sakshi — a final-year Electronics & Telecommunication Engineering student at
            PVG's College of Engineering and Technology, Pune, with a strong interest in{' '}
            <span className="text-textLight font-semibold">Full-Stack Web Development</span>{' '}
            and <span className="text-textLight font-semibold">AI/ML Engineering</span>.
          </p>

          <p>
            I build full-stack applications using{' '}
            <span className="text-textLight font-semibold">Next.js, React, TypeScript, Node.js, FastAPI, and PostgreSQL</span>,
            and engineer AI features with{' '}
            <span className="text-textLight font-semibold">Groq/Llama-3, Qdrant, LangChain, and RAG pipelines</span> —
            including real-time multiplayer systems, adaptive learning engines, and NLP-powered tools.
          </p>

          <p>
            As a Jr. Product Developer at{' '}
            <span className="text-textLight font-semibold">Vulnuris Security Solutions</span>,
            I built an email scheduler using Apache Pulsar & PostgreSQL (35% reliability
            improvement), migrated 15+ components from JavaScript to TypeScript with Zustand
            state management (40% performance gain), and shipped a conference website
            handling 100+ registrations.
          </p>

          <p>
            I'm an athlete as well — representing my college in university-level competitions —
            which has shaped my discipline, teamwork, and ability to perform under pressure.
          </p>

          <p>
            Runner-Up at{' '}
            <span className="text-textLight font-semibold">BV TechFusion 2026</span>, a
            national-level B.E./B.Tech project competition at Bharati Vidyapeeth COE Pune —
            2nd place among 130+ competing project groups. Also cleared institutional
            selection for{' '}
            <span className="text-textLight font-semibold">Smart India Hackathon 2024</span>.
          </p>

          <p className="text-xl text-textLight font-semibold">
            Actively seeking Full-Stack, Frontend, Backend, or AI/ML Engineering roles (2026 Batch).
          </p>
        </div>

        {/* Your Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gradientStart to-gradientEnd p-3 rounded-full shadow-2xl">
              <img
                src="/certificates/photo.jpg"
                alt="Sakshi Ippe - Full-Stack Developer & AI/ML Engineer"
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