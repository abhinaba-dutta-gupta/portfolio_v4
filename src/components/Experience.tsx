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
    const pdfPath = "/pdf/Abhinaba_Dutta_Gupta_Resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <section id="experience" className="sm:mb-16 mb-10 scroll-mt-24 animate-fade-in">
      <div className="sm:container mx-auto sm:text-center bg-gradient-to-br from-[#232526]/80 to-[#414345]/80 rounded-2xl shadow-xl border border-slate-800/40 backdrop-blur-md p-4 sm:p-6 mx-auto w-full max-w-2xl text-center">
        <h2 className="reveal-up text-3xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tight uppercase text-center">
          Experience
        </h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-purple-400/60" aria-hidden="true" />
          <ol className="space-y-4">
            {EXPERIENCES && EXPERIENCES.map((exp, index) => (
              <li key={index} className="relative pl-10">
                <span className="absolute left-0 top-3 size-3 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 shadow-[0_0_0_4px_rgba(8,12,20,0.6)]" aria-hidden="true" />
                <div className="text-left p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="text-slate-400 text-xs sm:text-sm font-medium">{exp.timeline}</div>
                  <div className="mt-1 text-base sm:text-lg font-bold text-slate-100">{exp.company}</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-300">{exp.designation}</div>
                  <p className="text-sm leading-normal tracking-wide my-2 text-slate-400">
                    {exp.description.join(" ")}
                  </p>
                  <ul className="flex flex-wrap">
                    {exp.skills.map((skill, i) => (
                      <li key={i} className="p-1">
                        <Badge className="cursor-pointer bg-slate-700 text-slate-200 hover:bg-slate-600 transition-all duration-300 shadow-sm">
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div
          className="flex items-center cursor-pointer w-fit text-left mt-12 text-accent lg:m-0 m-auto hover:text-slate-500 transition-colors duration-300"
          onClick={openResume}
        >
          <span className="text-lg font-semibold pr-1">View Full Resume</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
