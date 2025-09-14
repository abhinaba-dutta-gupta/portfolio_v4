import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import emailjs from "@emailjs/browser";
import EMAILJS_CONFIG from "../../config";

const Contact = ({ id }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId, //service ID
        EMAILJS_CONFIG.templateId, //template ID
        e.target,
        EMAILJS_CONFIG.userId //user ID
      )
      .then(() => {
        alert(`Email sent successfully!`);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert(error.text);
      });
  };

  return (
    <section id="contact" className="sm:mb-16 mb-10 scroll-mt-24 animate-fade-in">
      <div className="sm:container mx-auto sm:text-center bg-gradient-to-br from-[#232526]/80 to-[#414345]/80 rounded-2xl shadow-xl border border-slate-800/40 backdrop-blur-md p-4 sm:p-6 mx-auto w-full max-w-2xl text-center">
        <h2 className="sm:text-4xl text-2xl font-extrabold sm:mb-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-lg tracking-tight uppercase">
          Contact Me
        </h2>
        <p className="text-sm text-slate-400 px-4">
          {`Whether you've got a project in mind that's as complex as an algorithm or just want to 
          drop a friendly 'Hello, World!', feel free to reach out. I'm here to geek out and get things done!`}
        </p>
        <form onSubmit={handleSubmit} className="mt-6 px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Your Name"
              className="p-3 border rounded-md w-full focus:outline-none focus:border-none bg-slate-900/60"
            />
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="Your Email"
              className="p-3 border rounded-md w-full focus:outline-none focus:border-none bg-slate-900/60"
            />
          </div>
          <Textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
            placeholder="Your Message"
            className="mt-4 p-3 border rounded-md w-full focus:outline-none focus:border-none bg-slate-900/60"
          />
          <Button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-blue-500 transition-colors duration-300 shadow-lg"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
