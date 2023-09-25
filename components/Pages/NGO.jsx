import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const NGO = () => {
     
    const container = {
        hidden: { opacity: 0},
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            duration:.5
          }
        }
      }
      const item = {
        hidden: { opacity: 0, marginTop:-1000  },
        show: { opacity: 1, marginTop:0  }
      }

      const badge = {
        hidden: { x:-1000, opacity:0},
        show: { x: 0, 
             opacity:1,
                transition: {
                duration:.5
                }  
            } 
      }
    return(
        <section  className="w-100 h-100 bg-beige" id="ngo">
           
           


           

            <div className="media-content-flex default-right-left">
               

                <div className="ngo-content">
                <motion.h3 className="headline-badge underline" initial={{y:-200, opacity:0 }} whileInView={{y:0, opacity:1 }} transition={{duration: .2}}>
                    <span className="underline">ngo</span>
                </motion.h3>
                <motion.h1 variants={container} initial="hidden" whileInView="show" className="text-left">
               
                    <motion.span variants={item}>Das ist die erste Zeile</motion.span><br />
                    <motion.span variants={item}>und das die zweite</motion.span>

                    

                </motion.h1>

                
           
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <img src="images/bg.jpg" className="img-mobile-fullbleed"/>
            </div>
        </section>
    )
}