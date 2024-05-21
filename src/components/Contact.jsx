import { useState, useEffecr, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form)
  }

  // service_0c2ncdf
  // template_o4vqfxt
  // DrMCsdRXabNF2pnGv // public key

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_0c2ncdf',
      'template_o4vqfxt',
      {
        from_name: form.name,
        to_name: "Ayman Sultan",
        from_email: form.email,
        to_email: "ayman.sultan7@gmail.com",
        message: form.message,
      },
      'DrMCsdRXabNF2pnGv'
    )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you as soon as possible.");

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong");
      })
  }

  return (
    <div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>


      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="block lg:flex justify-between items-center mt-8 py-3 text-secondary font-medium"
      >
        <div className="space-y-2 pt-2">
          <p className="hover:text-white"><FontAwesomeIcon icon={faUserTie} className="pe-4" /> Senior Front-end Developer</p>
          <p className="hover:text-white"><FontAwesomeIcon icon={faLocationDot} className="pe-4" /> Alexandria, Egypt</p>
        </div>
        <div className="space-y-2 pt-2">
          <p className="hover:text-white"><FontAwesomeIcon icon={faPhone} className="pe-4" /> +201228568886</p>
          <p className="hover:text-white"><FontAwesomeIcon icon={faEnvelope} className="pe-4" /> ayman.sultan7@gmail</p>
        </div>
        <div className="space-y-2 pt-2">
          <p className="hover:text-white"><FontAwesomeIcon icon={faLinkedin} className="pe-4" /> <a href="https://www.linkedin.com/in/ayman-sultan-1596764b">Linkedin profile</a></p>
          <p className="hover:text-white"><FontAwesomeIcon icon={faGithub} className="pe-4" /> <a href="https://www.github.com/aymansulta">Github profile</a></p>
        </div>
      </motion.div>

    </div>

  )
}

export default SectionWrapper(Contact, "contact")