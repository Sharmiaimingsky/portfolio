import React from "react";
import { Tilt } from 'react-tilt'; // Example named imports

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import selfPhoto from './canvas/Photo4.png';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center">

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who am I.</h2>
      </motion.div>
    
      <motion.p
        variants={fadeIn("center", "center", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
      >
        <img src={selfPhoto} className="w-60 h-60 object-contain  mx-60 my-7 mt-11 mb-11"/> 
     
        I'm an enthusiastic software developer with experience in Java, SpringBoot, Angular, JPA, TypeScript and
        JavaScript, HTML, CSS and expertise in frameworks like React, Node.js, and
        Three.js. 💻 I'm a quick learner and collaborate closely with clients to 
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems 🤝 . I am a self starter, and love to work in a fast paced environment.🤓 
        Lets create something together!👩🏻‍💻

        
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");