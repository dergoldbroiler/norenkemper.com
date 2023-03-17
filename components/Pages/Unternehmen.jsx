import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const Unternehmen = () => {
     
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
    return(
        <section  className="w-100 h-100 bg-white" id="company">
           
           
                <motion.h1 variants={container} initial="hidden" whileInView="show" className="text-center">

                    <motion.span variants={item}>Das ist die erste Zeile</motion.span><br />
                    <motion.span variants={item}>und das die zweite</motion.span>

                </motion.h1>
           


           

            <div className="media-content-flex default-left-right">
                <img src="images/sven01.JPG" />

                <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            </div>
        </section>
    )
}