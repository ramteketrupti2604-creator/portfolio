import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center 
      bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-4xl w-full text-center relative z-10">

        {/* 🔥 SECTION BADGE (ADDED) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-5 py-2 
          bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            <FaPaperPlane className="text-blue-400 text-lg animate-bounce" />
            <span className="text-sm tracking-widest text-gray-200">
              CONTACT SECTION
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaPaperPlane className="text-blue-400 text-3xl animate-bounce" />
          <h2 className="text-4xl font-bold">
            <span className="text-blue-400">Contact Me</span>
          </h2>
        </div>

        <p className="text-gray-400 mb-10 text-sm">
          Feel free to reach out for opportunities or collaboration 🚀
        </p>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-2xl p-8 shadow-xl max-w-md mx-auto flex flex-col gap-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-transparent border border-white/30 rounded-lg p-3 
            focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-transparent border border-white/30 rounded-lg p-3 
            focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="bg-transparent border border-white/30 rounded-lg p-3 
            focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg 
            hover:bg-blue-600 transition duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <FaPaperPlane /> Send Message
          </button>

          {/* STATUS */}
          {status && (
            <p className="text-sm text-gray-300 mt-2">{status}</p>
          )}
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;