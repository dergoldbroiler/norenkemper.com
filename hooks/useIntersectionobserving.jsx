import { useState, useEffect, useRef } from "react";

export const useIntersectionobserving = (element_ref, rootMargin) => {

    const [visible, setVisibility] = useState(false);

    

    useEffect(()=>{
        const observer = new IntersectionObserver (function (entries, observer) {
            let [entry] = entries;
   
                if (entry.isIntersecting) {
                   setVisibility(true);
                } else {
                   setVisibility(false);
                }
            
        }, {threshold:1, rootMargin:'-100%'});
        if(element_ref.current) {
            observer.observe(element_ref.current);


        return () => {
            observer.unobserve(element_ref.current);
        }
    }
    },[])

   return visible; 
}