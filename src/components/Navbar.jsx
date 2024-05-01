import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';
import { Html } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin2.png"
import leetcode from "../assets/lc2.png"
const Navbar = () => {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav 
className={`${styles.paddingX} flex items-center py-8 fixed top-0 z-20 w-full
${
  scrolled ? "bg-primary" : "bg-transparent"}`}
  > 
  <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
<Link to="/" 
className="flex gap-2 items-center"
onClick={() => {
  setActive("");
  window.scrollTo(0, 0)
}}>

  <img src = {logo} alt="logo" className="w-9 h-9 object-contain" />
  <p className="text-white text-[18px] font-bold cursor-pointer flex ">
  Sharmistha &nbsp;
  <span className="sm:block hidden"> | FullStack Dev </span><div
        onClick={() => window.open('https://github.com/Sharmiaimingsky', "_blank")}
        className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={github}  // Replace this with the actual path to your GitHub PNG icon
          alt="GitHub Icon"
          style={{ width: '24px', height: '24px', marginRight: '6px', marginTop:'-5px' }}
        />
      </div>
<div
  onClick={() => window.open('https://www.linkedin.com/in/sharmistha-chakrabortyy/', "_blank")}
  className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
   >
  <img
    src={ linkedin}  // Replace this with the actual path to your GitHub PNG icon
    alt="Linkedin Icon"
    style={{ width: '24px', height: '24px', marginRight: '15px', marginTop:'-5px'}}
  />
</div>
<div
  onClick={() => window.open('https://leetcode.com/sharmic17/', "_blank")}
 className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
  <img
    src={ leetcode}  // Replace this with the actual path to your GitHub PNG icon
    alt="Leetcode Icon"
    style={{ width: '24px', height: '24px', marginRight: '15px', marginTop:'-5px'}}
  />
</div></p>
</Link>
{/* <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
            <Html>
        
          <a href="https://example.com" target="_blank" position=""rel="noopener noreferrer">
            Visit Example
          </a>
        
      </Html>
</Canvas> */}

<ul className="list-none hidden sm:flex flex-row gap-10">
{navLinks.map((Link) => (
  <li
  key = {Link.id}
  className={`${
    active === Link.title
    ?"text-white"
    : "text-[#cfabe5]" 
  } hover:text-white text-[18px] font-medium cursor-pointer`}
  onClick={ () => setActive(Link.title)}
  >
    <a href={`#${Link.id}`} >{Link.title}</a>
  </li>
))}
</ul>
<div className="sm:hidden flex flex-1 justify-end items-center">
<img 
src ={toggle ?  close : menu}
alt="menu"
className="w-[28px] h-[28px]
object-contain cursor-pointer"
onClick={() => setToggle(!toggle)}

/>

<div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute 
top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
   <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ?  "text-black" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
</div>
</div>
</div>
</nav> 
)
}

export default Navbar