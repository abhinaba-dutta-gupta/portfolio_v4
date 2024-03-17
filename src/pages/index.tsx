import { Inter } from "next/font/google";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main
      className={`bg-primary mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ${inter.className}`}
    >
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header onNavigate={scrollToSection} />
        <main className="lg:w-1/2 lg:py-24">
          <About id="about" />
          <Experience id="experience" />
          <Projects id="projects" />
          <Contact id="contact" />
          <Footer id="footer" />
        </main>
      </div>
    </main>
  );
}
