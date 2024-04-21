import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const Experience = ({ id }: any) => {
  const EXPERIENCES = [
    {
      timeline: "Oct 2022 – present",
      designation: "Software Engineer - Frontend",
      company: "Cognizant Technology Solutions",
      description: [
        "Spearheaded the development and maintenance of numerous responsive websites utilizing HTML,CSS, and React for a premier Timeshare Exchange Company in North America, ensuring optimal user experiences and seamless functionality",
        "Fostered collaboration with design and backend teams to seamlessly integrate new features and functionalities, fostering innovation and continuous improvement.",
        "Engineered reusable components and templates leveraging React, HTML, and CSS, streamlining development processes and enhancing project scalability.",
        "Directed my company's GenAI initiative, leading a team of six to deliver tailored solutions for diverse clients in the RCGTH domain.",
      ],
      skills: ["React", "Redux", "Tailwind", "JavaScript", "TypeScript", "Git"],
    },
    {
      timeline: "Aug 2021 – Sep 2022",
      designation: "Jr. Software Engineer - Frontend",
      company: "Cognizant Technology Solutions",
      description: [
        "Led UI development initiatives for a top-tier Vacation Ownership Company in North America, leveraging jQuery, HTML, and CSS to deliver captivating user interfaces that elevate user engagement and satisfaction.",
        "Collaborated closely with design teams to contribute insights and assistance in UI design, ensuring seamless integration of design elements with robust functionality.",
        "Provided proactive technical support and adept troubleshooting for website issues, fostering seamless user experiences and mitigating potential disruptions.",
      ],
      skills: ["jQuery", "HTML", "CSS", "JavaScript"],
    },
    {
      timeline: "Aug 2020 – Jul 2021",
      designation: "Programmer Ananlyst Trainee",
      company: "Cognizant Technology Solutions",
      description: [
        "Served as a vital UI resource for a major real estate entity in North America, contributing to the creation of captivating digital solutions.",
        "Collaborated closely with the Client Team to conceptualize and develop initial wireframes, ensuring alignment with client requirements and project objectives.",
        "Led the development of prototypes under client guidance, refining and iterating on designs to achieve optimal user experiences.",
        "Executed the development of final products utilizing Salesforce (LWC), HTML and CSS, delivering robust and scalable solutions tailored to client needs.",
      ],
      skills: ["Salesforce", "HTML", "CSS", "Bootstrap"],
    },
  ];

  const openResume = () => {
    const pdfPath = "/pdf/Resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <section id="experience" className="sm:mb-16 mb-10 scroll-mt-24">
      <div className="sm:container mx-auto sm:text-center">
        <h2 className="sm:text-3xl text-2xl font-bold sm:mb-4 text-accent sticky top-0 z-20 bg-slate-900/75 lg:p-0 p-4 backdrop-blur lg:relative">
          EXPERIENCE
        </h2>
        {EXPERIENCES &&
          EXPERIENCES.map((exp, index) => {
            return (
              <div
                key={index}
                className="mb-4 text-accent group hover:bg-gray-800 rounded-lg"
              >
                <div className="grid gap-4 sm:grid-cols-8 p-4">
                  <header className="sm:col-span-2 text-slate-400 sm:text-[16px] text-sm">
                    {exp.timeline}
                  </header>
                  <div className="sm:col-span-6 sm:text-left">
                    <p className="sm:text-xl text-sm font-bold">
                      {exp.company}
                    </p>
                    <p className="sm:text-lg text-sm font-bold">
                      {exp.designation}
                    </p>
                    <p className="text-sm font-normal leading-normal tracking-wide my-2 text-slate-400">
                      {exp.description.join(" ")}
                    </p>
                    <ul className="flex flex-wrap">
                      {exp.skills.map((skill, i) => (
                        <li key={i} className="p-1">
                          <Badge className="cursor-pointer bg-gray-600 group-hover:bg-primary">
                            {skill}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        <div
          className="flex items-center cursor-pointer w-fit text-left mt-12 text-accent lg:m-0 m-auto hover:text-slate-500"
          onClick={openResume}
        >
          <span className="text-lg font-semibold pr-1">View Full Résumé</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
