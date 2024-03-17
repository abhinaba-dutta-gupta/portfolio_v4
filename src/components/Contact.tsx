import { useState } from "react";
import { Button } from "./ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted:", formData);
    // You can also add a function to send the form data to your backend or perform other actions
  };

  return (
    <section id="contact" className="mb-16 px-4 text-accent">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-4 text-quaternary">Contact Me</h2>
        <p className="text-lg">
          Have a project in mind or just want to say hello? Feel free to reach
          out to me.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Your Name"
              className="p-3 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="Your Email"
              className="p-3 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <textarea
            id="message"
            name="message"
            rows="4"
            onChange={handleChange}
            value={formData.message}
            required
            placeholder="Your Message"
            className="mt-4 p-3 border rounded-md w-full focus:outline-none focus:border-blue-500"
          ></textarea>
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
