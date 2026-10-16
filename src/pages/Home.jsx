import { FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar"
import { FaGithub } from "react-icons/fa";
import css from "./../assets/css.png";
import figma from "./../assets/figma.png";
import react from "./../assets/react.png";
import node from "./../assets/node.png";
import html from "./../assets/html.png";
import spring from "./../assets/spring.png";
import java from "./../assets/java.png";
import firebase from "./../assets/Firebase.png";

export default function Home() {
  return (
    <>
        <Navbar pname="h" colorLinkNavbar="#FFF714" />

        <div className="flex items-center justify-between pt-30 pl-80 pr-80">
            <div className="flex flex-col gap-2">
                <span className="text-white text-6xl">Full Stack Web</span>
                <span className="text-white text-6xl">Developer</span>
                <span className="text-white text-2xl">Hi, I'm Seksan SAU A passionate Full Stack</span>
                <span className="text-white text-2xl">Web Developer based in Thailand</span>
                <div className="flex gap-3 pt-3">
                    <FaLinkedin className="text-green-400 text-2xl" />
                    <FaGithub className="text-green-400 text-2xl" />
                </div>
            </div >

            <div>
                <img src="https://images.pexels.com/photos/10467168/pexels-photo-10467168.jpeg" alt="" className="w-[500px] h-[450px] object-cover rounded-full" />  
            </div>
        </div>

        <div className="flex justify-center pt-20">
            <p className="text-white text-2xl font-bold">My Tech Stack</p>
        </div>

        <div className="flex items-center justify-center gap-10 pt-10">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={node} alt="node" />
            <img src={react} alt="react" />
            <img src={spring} alt="spring" />
            <img src={java} alt="java" />
            <img src={figma} alt="figma" />
            <img src={firebase} alt="firebase" />
        </div>
    </>
  )
}
