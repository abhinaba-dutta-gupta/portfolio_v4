import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

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
  };

  return (
    <section id="contact" className="mb-16 px-4">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-4 text-accent">Contact Me</h2>
        <p className="text-sm text-accent">
          {`Whether you've got a project in mind that's as complex as an algorithm or just want to 
          drop a friendly 'Hello, World!', feel free to reach out. I'm here to geek out and get things done!`}
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Your Name"
              className="p-3 border rounded-md w-full focus:outline-none focus:border-none"
            />
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="Your Email"
              className="p-3 border rounded-md w-full focus:outline-none focus:border-none"
            />
          </div>
          <Textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
            placeholder="Your Message"
            className="mt-4 p-3 border rounded-md w-full focus:outline-none focus:border-none"
          />
          <Button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-blue-500"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
