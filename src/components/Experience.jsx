const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 lg:px-20 bg-bgDark/50">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-16 text-center">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-bgDark/70 rounded-2xl p-8 shadow-2xl border border-accent/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-textLight">Jr. Product Developer Intern</h3>
              <p className="text-accent text-xl">Vulnuris Security Solutions, Pune</p>
            </div>
            <p className="text-textMuted mt-2 md:mt-0">May 2025 – Aug 2025</p>
          </div>
          <ul className="space-y-4 text-textMuted list-disc pl-6">
            <li>Built asset management module using React.js, TypeScript, PostgreSQL with Drizzle ORM, and Zustand for state management.</li>
            <li>Utilized Docker for containerization and Postman for API testing → reduced deployment issues by 30%.</li>
            <li>Migrated 15+ React components from JavaScript to TypeScript → increased type safety and reduced runtime bugs.</li>
            <li>Collaborated in daily stand-ups, code reviews, and sprint planning → developed strong agile workflow and teamwork skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Experience;