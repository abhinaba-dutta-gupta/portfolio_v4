import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import emailjs from "@emailjs/browser";
import EMAILJS_CONFIG from "../../config";
import { useToast } from "./ui/use-toast";

const Contact = ({ id }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const isFormValid = useMemo(() => {
    const hasName = formData.name.trim().length > 1;
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    const hasValidEmail = emailRegex.test(formData.email.trim());
    const hasMessage = formData.message.trim().length > 5;
    return hasName && hasValidEmail && hasMessage;
  }, [formData]);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);
    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId, //service ID
        EMAILJS_CONFIG.templateId, //template ID
        e.target,
        EMAILJS_CONFIG.userId //user ID
      )
      .then(() => {
        toast({
          title: "Message sent",
          description: "Thanks! I will get back to you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast({
          title: "Something went wrong",
          description: "Please try again or reach me on LinkedIn.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="mb-12 sm:mb-20 scroll-mt-24 animate-fade-in">
      <div className="relative mx-auto w-full max-w-3xl px-4 py-10 sm:px-8 bg-gradient-to-br from-[#232526]/90 to-[#414345]/90 rounded-3xl shadow-2xl border border-slate-800/50 backdrop-blur-xl flex flex-col items-center">
        <h2 className="reveal-up text-3xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 tracking-tight uppercase text-center">
          Contact Me
        </h2>
        <p className="text-base text-slate-300 mb-6 max-w-2xl text-center">
          Whether you&apos;ve got a project in mind that&apos;s as complex as an algorithm or just want to drop a friendly &apos;Hello, World!&apos;, feel free to reach out. I&apos;m here to geek out and get things done!
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Your Name"
              className="p-3 border border-cyan-400/40 rounded-lg w-full focus:outline-none focus:border-cyan-400 bg-white text-slate-900 placeholder-slate-500"
            />
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="Your Email"
              className="p-3 border border-cyan-400/40 rounded-lg w-full focus:outline-none focus:border-cyan-400 bg-white text-slate-900 placeholder-slate-500"
            />
          </div>
          <Textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
            placeholder="Your Message"
            className="p-3 border border-cyan-400/40 rounded-lg w-full focus:outline-none focus:border-cyan-400 bg-white text-slate-900 placeholder-slate-500 min-h-[120px]"
          />
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl mt-2 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-xl text-lg font-bold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
