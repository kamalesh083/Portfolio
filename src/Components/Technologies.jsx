import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { animate, motion } from "framer-motion"

const iconsVariants = (duration) =>({
    initial : {y : -10},
    animate : {
        y :[10,-10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",

        },
    }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
         whileInView = {{opacity : 1, y :0}}
         initial = {{opacity : 0, y : -100}}
         transition = {{duration : 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView = {{opacity : 1, x :0}}
        initial = {{opacity : 0, x : -100}}
        transition = {{duration : 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconsVariants(2.5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-5xl  text-red-500"/>
            </motion.div>
            <motion.div
            variants={iconsVariants(3)}
            initial = "initial"
            animate = "animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3  className="text-5xl  text-blue-400"/>
            </motion.div>
            <motion.div            
            variants={iconsVariants(5)}
            initial = "initial"
            animate = "animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-5xl text-yellow-300"/>
            </motion.div>
            <motion.div
            variants={iconsVariants(2)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl  text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconsVariants(6)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl text-white"/>
            </motion.div>
            <motion.div
            variants={iconsVariants(4)}
            initial = "initial"
            animate = "animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-5xl text-green-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies