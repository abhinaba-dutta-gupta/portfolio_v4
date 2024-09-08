const About = ({ id }: any) => {
  return (
    <section id="about" className="sm:mb-16 mb-10 scroll-mt-24">
      <div className="sm:container mx-auto sm:text-center">
        <h2 className="sm:text-3xl text-2xl font-bold sm:mb-4 text-accent sticky top-0 z-20 bg-slate-900/75 lg:p-0 p-4 backdrop-blur lg:relative">
          ABOUT ME
        </h2>
        <div className="text-slate-400 p-4">
          <p className="text-[16px]">
            {`Frontend Engineer with more than 4 years of experience leveraging React.js, Tailwind CSS, and more to craft user-centric web experiences. 
            Proven track record of building reusable components, optimizing workflows, and staying ahead of the curve.`}
          </p>
          <p className="text-[16px] mt-4">
            {`Adept at collaborating with designers and backend developers to deliver impactful features that drive user engagement and business growth.`}
          </p>
          {/* <p className="text-[16px] mt-4">
            {`Let's collaborate and build something interesting together!`}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
