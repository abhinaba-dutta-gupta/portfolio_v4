const About = ({ id }: any) => {
  return (
    <section id="about" className="sm:mb-16 mb-10 scroll-mt-24 animate-fade-in">
      <div className="sm:container mx-auto sm:text-center bg-gradient-to-br from-[#232526]/80 to-[#414345]/80 rounded-2xl shadow-xl border border-slate-800/40 backdrop-blur-md p-4 sm:p-6 mx-auto w-full max-w-2xl text-center">
        <h2 className="sm:text-4xl text-2xl font-extrabold sm:mb-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-lg tracking-tight uppercase">
          About Me
        </h2>
        <div className="text-slate-400 p-4">
          <p className="text-[16px]">
            {`Frontend Engineer with more than 4 years of experience leveraging React.js, Tailwind CSS, and more to craft user-centric web experiences. 
            Proven track record of building reusable components, optimizing workflows, and staying ahead of the curve.`}
          </p>
          <p className="text-[16px] mt-4">
            {`Adept at collaborating with designers and backend developers to deliver impactful features that drive user engagement and business growth.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
