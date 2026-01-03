const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-8 lg:px-20 bg-bgDark/50">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-16 text-center">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <img src="/certificates/oracle-genai.jpg.png" alt="Oracle Cloud Infrastructure 2025 Certified Generative AI Professional" className="rounded-xl shadow-2xl hover:scale-105 transition mx-auto max-w-full h-auto" />
          <p className="text-lg text-textLight font-medium">Oracle Cloud Infrastructure 2025 Generative AI Professional</p>
        </div>
        <div className="text-center space-y-4">
          <img src="/certificates/nvidia-deeplearning.jpg.png" alt="Fundamentals of Deep Learning - NVIDIA" className="rounded-xl shadow-2xl hover:scale-105 transition mx-auto max-w-full h-auto" />
          <p className="text-lg text-textLight font-medium">Fundamentals of Deep Learning - NVIDIA</p>
        </div>
        <div className="text-center space-y-4">
          <img src="/certificates/udemy-webdev.jpg.png" alt="The Complete Web Developer Bootcamp - Udemy" className="rounded-xl shadow-2xl hover:scale-105 transition mx-auto max-w-full h-auto" />
          <p className="text-lg text-textLight font-medium">The Complete Web Developer Bootcamp - Udemy</p>
        </div>
        <div className="text-center space-y-4">
          <img src="/certificates/internship-completion-letter.png" alt="Intern" className="rounded-xl shadow-2xl hover:scale-105 transition mx-auto max-w-full h-auto" />
          <p className="text-lg text-textLight font-medium">Intership Completion Certificate</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;