import Image from "next/image";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Projects = ({ id }: any) => {
  const PROJECTS = [
    {
      id: 1,
      title: "ReactQuizz",
      description:
        "ReactQuizz is a trivia app built with React, offers users an immersive and interactive experience with a wide range of trivia questions.",
      link: "https://github.com/abhinaba-dutta-gupta/quiz_app",
      image: project1,
    },
    {
      id: 2,
      title: "InterviewHub",
      description:
        "An app made with React, Node & MongoDB for conducting interviews featuring authentication, database integration and a user-friendly interface, ensuring smooth interview experiences for interviewers.",
      link: "https://github.com/abhinaba-dutta-gupta/order_of_merlin",
      image: project2,
    },
    {
      id: 3,
      title: "FlavorDash",
      description:
        "A react app based on an e-commerce website under development. Coming soon!",
      link: "",
      image: project3,
    },
  ];

  return (
    <section id="projects" className="mb-12 sm:mb-20 scroll-mt-24 animate-fade-in">
      <div className="relative mx-auto w-full max-w-3xl px-4 py-10 sm:px-8 bg-gradient-to-br from-[#232526]/95 to-[#414345]/95 rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 tracking-tight uppercase text-center drop-shadow-lg">
          Projects
        </h2>
        <div className="flex flex-col gap-8 w-full">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row w-full p-6 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-800/60 hover:via-blue-800/60 hover:to-purple-800/60 hover:shadow-2xl rounded-2xl transition-all duration-300 backdrop-blur-lg group"
            >
              <Image
                src={project.image}
                alt="project image"
                className="md:w-2/5 md:h-1/4 md:p-0 p-4 mr-4 rounded-xl shadow-lg object-cover border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300"
              />
              <div className="w-full lg:w-auto md:text-left flex flex-col justify-center">
                <Link
                  className="flex md:justify-start items-center text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300 underline underline-offset-4 decoration-cyan-400 hover:decoration-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  {project.title}
                  <ArrowUpRight color="#67e8f9" size={22} className="ml-2" />
                </Link>
                <p className="text-base text-slate-200 mt-3 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
