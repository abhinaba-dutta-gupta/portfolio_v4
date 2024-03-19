import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const Experience = ({ id }: any) => {
  const EXPERIENCES = [
    {
      timeline: "Oct 2022 – present",
      designation: "Software Engineer",
      company: "Cognizant Technology Solutions",
      description: [
        "Developed and maintained multiple responsive websites using HTML, CSS, and React for one of the leading Timeshare Exchange Companies of North America.",
        "Collaborated with designers and backend developers to implement new features and functionalities.",
        "Created reusable components and templates using React, HTML5 & CSS.",
        "Directed my company's GenAI initiative, leading a team of six to deliver tailored solutions for diverse clients in the RCGTH domain.",
      ],
      skills: ["React", "Redux", "Tailwind", "JavaScript"],
    },
    {
      timeline: "Aug 2021 – Sep 2022",
      designation: "Jr. Software Engineer",
      company: "Cognizant Technology Solutions",
      description: [
        "Developed UI for one of the leading Vacation Ownership Companies of North America using jQuery, HTML5 & CSS.",
        "Helped in the UI design for certain sections of the application.",
        "Provided technical support and troubleshooting for website issues.",
      ],
      skills: ["jQuery", "HTML", "CSS", "JavaScript"],
    },
    {
      timeline: "Aug 2020 – Jul 2021",
      designation: "Programmer Ananlyst Trainee",
      company: "Cognizant Technology Solutions",
      description: [
        "Worked as a junior UI resource for one of the largest real-estate companies in North America.",
        "Developed the initial wireframe with the Client Team.",
        "Development of the prototype as per client direction.",
        "Development of the actual product using Salesforce(LWC), HTML5 & CSS.",
      ],
      skills: ["Salesforce", "HTML", "CSS", "Bootstrap"],
    },
  ];

  const openResume = () => {
    const pdfPath = "/pdf/Resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <section id="experience" className="mb-16 scroll-mt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-accent">Experience</h2>
        {EXPERIENCES &&
          EXPERIENCES.map((exp, index) => {
            return (
              <div
                key={index}
                className="mb-4 text-accent hover:bg-gray-800 rounded-lg"
              >
                <div className="grid gap-4 sm:grid-cols-8 p-4">
                  <header className="sm:col-span-2">{exp.timeline}</header>
                  <div className="sm:col-span-6 sm:text-left text-center">
                    <p className="text-xl font-bold">{exp.company}</p>
                    <p className="text-lg font-bold">{exp.designation}</p>
                    <p className="text-sm font-normal leading-normal tracking-wide my-2">
                      {exp.description.join(" ")}
                    </p>
                    <ul className="flex flex-wrap justify-center">
                      {exp.skills.map((skill, i) => (
                        <li key={i} className="p-1">
                          <Badge className="cursor-pointer">{skill}</Badge>
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
