import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* Contact Details */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-6 text-white">
          <div>
            <span className="font-medium text-lg">Email:</span>
            <a 
              href="mailto:sharmic17@gmail.com" 
              className="block mt-1 text-secondary hover:text-white transition-colors duration-200"
            >
              sharmic17@gmail.com
            </a>
          </div>
   <div>
            <span className="font-medium text-lg">Phone:</span>
            <a 
              href="tel:+917758085416" 
              className="block mt-1 text-secondary hover:text-white transition-colors duration-200"
            >
              +91-7758085416
            </a>
          </div>
          <div>
            <span className="font-medium text-lg">LinkedIn:</span>
            <a 
              href="https://www.linkedin.com/in/sharmistha-chakrabortyy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block mt-1 text-secondary hover:text-white transition-colors duration-200"
            >
              Linkedin
            </a>
          </div>
        </div>
      </motion.div>

      {/* 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
