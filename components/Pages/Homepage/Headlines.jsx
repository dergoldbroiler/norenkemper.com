import { useEffect } from "react";
import { motion } from "framer-motion";

export const Headlines = ({textColor, classes, animation}) => {
    /*
transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;
    */

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
    if(animation === 'homepage') {
        return ( 
            <div className="headlines d-md-flex justify-content-end">
      
             <div>
     
                 <motion.h3 
                      initial={{ y:-500, opacity:0 }}
                      animate={{ y:0, opacity: .5 }}
                     style={{color:textColor}} 
                     className="right-left">
                     
                     Sven Norenkemper

                 </motion.h3>
     
                 <motion.h1 
                     initial={{ opacity: 0}}
                     animate={{ opacity: 1 }}
                     transition={{ ease: "easeOut", duration: 1}}
                     style={{color:textColor}} 
                     className="right-left">
                    
                    Organsationsberatung<br/>
                    Coaching<br/>
                    Training

                 </motion.h1>
         
             </div>
            </div>
         ); 
    }

    return ( 
       <div className="headlines d-md-flex justify-content-end w-100">
 
        <div className="w-100">
                <motion.h3 
                      initial={{ opacity:0 }}
                      animate={{opacity: 1 }}
                     style={{color:textColor}} 
                     className="right-left"
                     transition={{ duration: 1 }}
                     >
                     
                     Sven Norenkemper

                 </motion.h3>
                <h1 className="right-left">
                    <div class="roller">
                    <span id="rolltext"> Organsationsberatung<br/>
                                    Coaching<br/>
                                    Training<br/></span>
                    </div>
                </h1>
  
    
        </div>
       </div>
    ); 
   
}

