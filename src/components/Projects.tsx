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
    <section id="projects" className="sm:mb-16 mb-10 scroll-mt-24 animate-fade-in">
      <div className="sm:container mx-auto sm:text-center bg-gradient-to-br from-[#232526]/80 to-[#414345]/80 rounded-2xl shadow-xl border border-slate-800/40 backdrop-blur-md p-4 sm:p-6 mx-auto w-full max-w-2xl text-center">
        <h2 className="sm:text-4xl text-2xl font-extrabold sm:mb-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-lg tracking-tight uppercase">
          Projects
        </h2>
        {PROJECTS.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col md:flex-row w-full p-4 text-accent sm:mb-4 hover:bg-gradient-to-r hover:from-cyan-900/60 hover:via-blue-900/60 hover:to-purple-900/60 hover:shadow-xl rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              <Image
                src={project.image}
                alt="project image"
                className="md:w-2/5 md:h-1/4 md:p-0 p-4 mr-4 rounded-xl shadow-lg"
              />
              <div className="w-full lg:w-auto md:text-left">
                <Link
                  className="flex md:justify-start items-center text-[16px] font-bold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  {project.title}
                  <ArrowUpRight color="white" size={16} />
                </Link>
                <p className="text-sm text-slate-400">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
