import { Inter, Poppins } from "next/font/google";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconCloud } from "@/components/magicui/icon-cloud";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const slugs = [
    "typescript",
    "javascript",
    // "dart",
    // "java",
    "react",
    // "flutter",
    // "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    // "prisma",
    // "amazonaws",
    // "postgresql",
    // "firebase",
    // "nginx",
    "vercel",
    // "testinglibrary",
    "jest",
    // "cypress",
    // "docker",
    "git",
    "jira",
    "github",
    // "gitlab",
    "visualstudiocode",
    // "androidstudio",
    // "sonarqube",
    "figma",
    "vercel",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <main
      className={`relative min-h-screen w-full font-sans ${inter.className} ${poppins.className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(1200px 600px at -10% -10%, rgba(56,189,248,0.20), transparent 60%), radial-gradient(1200px 600px at 110% 110%, rgba(168,85,247,0.20), transparent 60%), linear-gradient(135deg, #0f172a 0%, #111827 60%, #0b1220 100%)",
        }} />
      </div>
      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none z-0" />
      <div className="relative z-10 flex justify-center w-full px-2 sm:px-4">
        <div className="w-full max-w-screen-xl lg:flex lg:justify-between lg:gap-4">
          <Header onNavigate={scrollToSection} />
          <main className="lg:w-1/2 lg:py-24 w-full py-12">
            <About id="about" />
            <Experience id="experience" />
            <Projects id="projects" />
            <Contact id="contact" />
            <div className="flex items-center justify-center rounded-2xl">
              <IconCloud images={images} />
            </div>
            <Footer id="footer" />
          </main>
        </div>
      </div>
    </main>
  );
}
