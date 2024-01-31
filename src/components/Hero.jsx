import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Html } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin2.png"
import leetcode from "../assets/lc2.png"
const Hero = (
  {source_code_link,
  }
) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#b26de6]`}>
            Hi, I'm <span className='text-[#fafafa] shadow-rose-950'>Sharmistha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#f2e2f4]`}>
            I develop user <br className='sm:block hidden' />
            interfaces and web applications 
            <div
        onClick={() => window.open('https://github.com/Sharmiaimingsky', "_blank")}
        className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={github}  // Replace this with the actual path to your GitHub PNG icon
          alt="GitHub Icon"
          style={{ width: '24px', height: '24px', marginRight: '8px' }}
        />
      </div>
<div
  onClick={() => window.open('https://www.linkedin.com/in/sharmistha-chakrabortyy/', "_blank")}
  className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
   >
  <img
    src={ linkedin}  // Replace this with the actual path to your GitHub PNG icon
    alt="Linkedin Icon"
    style={{ width: '24px', height: '24px', marginRight: '15px', marginTop:'12px'}}
  />
</div>
<div
  onClick={() => window.open('https://leetcode.com/sharmic17/', "_blank")}
 className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
  <img
    src={ leetcode}  // Replace this with the actual path to your GitHub PNG icon
    alt="Leetcode Icon"
    style={{ width: '24px', height: '24px', marginRight: '15px', marginTop:'20px'}}
  />
</div>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-0 bottom-4 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;