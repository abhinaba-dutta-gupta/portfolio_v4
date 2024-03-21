const About = ({ id }: any) => {
  return (
    <section id="about" className="mb-16 scroll-mt-24 text-accent">
      <div className="sm:container mx-auto sm:text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
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
    </section>
  );
};

export default About;
