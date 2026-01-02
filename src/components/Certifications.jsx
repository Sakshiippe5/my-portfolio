const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-8 lg:px-20 bg-bgDark/50">
      <h2 className="text-4xl lg:text-5xl font-bold text-textLight mb-16 text-center">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <img src="https://www.dsp.co.uk/hubfs/Generative%20AI%20Professional%20Certification%20A%20Lexicon%20Blog.png" alt="Oracle Cloud Infrastructure 2025 Certified Generative AI Professional" className="rounded-xl shadow-2xl hover:scale-105 transition mx-auto max-w-full h-auto" />
          <p className="text-lg text-textLight font-medium">Oracle Cloud Infrastructure 2025 Generative AI Professional</p>
        </div>
        <div className="text-center space-y-4">
          <img src="https://user-images.githubusercontent.com/64315038/128064231-005e7542-d7dd-47e9-9f4a-16def071e403.jpg" alt="Fundamentals of Deep Learning - NVIDIA" className="rounded-xl shadow-2xl hover:scale-105 transition mx-auto max-w-full h-auto" />
          <p className="text-lg text-textLight font-medium">Fundamentals of Deep Learning - NVIDIA</p>
        </div>
        <div className="text-center space-y-4">
          <img src="https://media.licdn.com/dms/image/sync/v2/D5627AQHL_zj61Y5cRA/articleshare-shrink_800/articleshare-shrink_800/0/1711808751023?e=2147483647&v=beta&t=WHzgzGfcNLCGLBNfmwIF2YEphlsl6oNlLC8Xi2iB0Y4" alt="The Complete Web Developer Bootcamp - Udemy" className="rounded-xl shadow-2xl hover:scale-105 transition mx-auto max-w-full h-auto" />
          <p className="text-lg text-textLight font-medium">The Complete Web Developer Bootcamp - Udemy</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;