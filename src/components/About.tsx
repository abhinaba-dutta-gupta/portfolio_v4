
const About = ({ id }: any) => {
  return (
    <section id="about" className="mb-12 sm:mb-20 scroll-mt-24 animate-fade-in">
      <div className="relative mx-auto w-full max-w-3xl px-4 py-10 sm:px-8 bg-gradient-to-br from-[#232526]/90 to-[#414345]/90 rounded-3xl shadow-2xl border border-slate-800/50 backdrop-blur-xl flex flex-col items-center">
        <h2 className="reveal-up text-3xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tight uppercase text-center">
          About Me
        </h2>
        <div className="text-slate-300 text-lg sm:text-xl leading-relaxed text-center max-w-2xl">
          <p>
            Frontend Engineer with 5+ years of experience leveraging React.js, Tailwind CSS, and more to craft user-centric web experiences. Proven track record of building reusable components, optimizing workflows, and staying ahead of the curve.
          </p>
          <p className="mt-4">
            Adept at collaborating with designers and backend developers to deliver impactful features that drive user engagement and business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
