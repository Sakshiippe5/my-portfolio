const Projects = () => {
  const projects = [
    {
      title: "WorkFlowForge (Ongoing)",
      tech: "React.js, Node.js, PostgreSQL, Docker, GitHub Actions, AWS EC2/RDS, Nginx",
      description: [
        "Designing a customizable workflow automation dashboard with real-time task updates and JWT authentication.",
        "Implementing full CI/CD pipeline using GitHub Actions for automated build, test, and deployment.",
        "Deploying on AWS (EC2 + RDS) with Nginx reverse proxy for scalable, production-grade hosting."
      ],
      liveLink: "",
      githubLink: ""
    },
     {
    title: "E-Commerce Sales & Customer Analytics Platform",
    tech: "SQL, Power BI, DAX, Data Analysis",
    description: [
      "Analyzed 100K+ e-commerce transactions using SQL (joins, CTEs, window functions, aggregations) to identify regional sales imbalances affecting 12–15% of revenue distribution.",
      "Computed key business KPIs including Revenue Trends, Customer Lifetime Value (CLV), and Average Order Value (AOV) with improved reporting accuracy (~10%) through data cleaning and validation.",
      "Developed an interactive Power BI dashboard with 10+ DAX-based KPI visualizations, enabling self-serve analytics and reducing manual reporting effort by ~15%."
    ],
    liveLink: "",  // add Power BI link if available
    githubLink: "" // optional
  },
  {
    title: "House Price Prediction (End-to-End ML App)",
    tech: "Python, Scikit-learn, Pandas, NumPy, Streamlit",
    description: [
      "Built an end-to-end machine learning pipeline on 20K+ housing records including preprocessing, feature engineering, and scaling.",
      "Trained and compared multiple regression models (Linear Regression, Ridge, Random Forest, Gradient Boosting) using cross-validation and optimized performance using GridSearchCV (R² ≈ 0.77).",
      "Developed and deployed an interactive Streamlit web application for real-time house price prediction with a user-friendly UI."
    ],
    liveLink: "",  // 🔥 add Streamlit link after deploy
    githubLink: "" // add repo link
  },
    {
      title: "Resume Skill Gap Analyzer",
      tech: "Python, NLP, SQL, React.js",
      description: [
        "Built an explainable system to compare resumes with job descriptions and identify skill gaps.",
        "Extracted and normalized skills from unstructured text using NLP techniques.",
        "Calculated match scores and visualized insights through a clean, user-friendly interface."
      ],
      liveLink: "",
      githubLink: ""
    },
    {
      title: "Sorting Algorithm Visualizer",
      tech: "React.js, JavaScript, HTML5, CSS3",
      description: [
        "Built an interactive tool to visualize Merge, Quick, Insertion, and Bubble Sort algorithms.",
        "Implemented real-time animations to demonstrate step-by-step algorithm behavior.",
        "Added user controls for array size, speed, and algorithm selection to enhance learning."
      ],
      liveLink: "",
      githubLink: ""
    }
  ];

  return (
    <section id="projects" className="py-20 px-8 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-16 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-bgDark/70 rounded-2xl p-8 shadow-2xl border border-accent/20 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold text-textLight mb-4">
              {proj.title}
            </h3>
            <p className="text-sm text-accent mb-6">{proj.tech}</p>

            <ul className="space-y-3 text-textMuted list-disc pl-5">
              {proj.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="mt-8 flex space-x-4">
              {proj.liveLink && (
                <a
                  href={proj.liveLink}
                  target="_blank"
                  className="text-accent hover:underline"
                >
                  Live Demo →
                </a>
              )}
              {proj.githubLink ? (
                <a
                  href={proj.githubLink}
                  target="_blank"
                  className="text-accent hover:underline"
                >
                  GitHub →
                </a>
              ) : (
                <span className="text-textMuted italic">
                  GitHub link coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
