const About = ({ id }: any) => {
  return (
    <section id="about" className="sm:mb-16 mb-10 scroll-mt-24">
      <div className="sm:container mx-auto sm:text-center">
        <h2 className="sm:text-3xl text-2xl font-bold sm:mb-4 text-accent sticky top-0 z-20 bg-slate-900/75 lg:p-0 p-4 backdrop-blur lg:relative">
          ABOUT ME
        </h2>
        <div className="text-slate-400 p-4">
          <p className="text-[16px]">
            {`Experienced and results-driven Frontend Developer with over 3 years of
          expertise in creating and maintaining websites and applications.`}
          </p>
          <p className="text-[16px] mt-4">
            {`My skillset encompasses React, Tailwind CSS, HTML, CSS, and JavaScript, 
          reflecting a commitment to delivering premium solutions while remaining abreast 
          of emerging technologies.`}
          </p>
          <p className="text-[16px] mt-4">
            {`Let's collaborate and build something interesting together!`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
