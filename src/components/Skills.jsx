const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML", "CSS", "Zustand"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "PostgreSQL", "SQL"],
    },
    {
      title: "AI / ML",
      skills: [
        "LLM Integration (Groq, Llama-3)",
        "RAG Pipelines",
        "Vector Search (Qdrant)",
        "Sentence Transformers",
        "Prompt Engineering",
        "LangChain",
        "NLP (spaCy, NLTK, TF-IDF)",
        "Scikit-Learn",
        "NumPy",
        "Pandas",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "CI/CD Basics"],
    },
    {
      title: "CS Fundamentals",
      skills: ["DSA", "OOP", "DBMS", "Computer Networks"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-8 lg:px-20 bg-bgDark/50">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-12 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-bgDark/70 rounded-xl p-6 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-accent mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-gradientStart/20 to-gradientEnd/20 text-textLight px-4 py-2 rounded-full border border-accent/30 hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;