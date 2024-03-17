import Image from "next/image";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Link from "next/link";

const Projects = () => {
  const PROJECTS = [
    {
      id: 1,
      title: "ReactQuizz",
      description:
        "ReactQuizz is a trivia app built with React, offers users an immersive and interactive experience with a wide range of trivia questions",
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
      title: "FlavorDash : Under development",
      description: "A react app based on an e-commerce website. Coming soon!",
      link: "",
      image: project3,
    },
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-accent">Projects</h2>
        {PROJECTS.map((project) => {
          return (
            <div
              key={project.id}
              className="flex w-full p-4 text-accent mb-4 hover:bg-gray-800 rounded-lg"
            >
              <Image
                src={project.image}
                alt="project image"
                className="w-28 h-16 mr-4"
              />
              <div className="w-full text-left">
                <Link
                  className="text-[16px] bold underline"
                  target="_blank"
                  href={project.link}
                >
                  {project.title}
                </Link>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
