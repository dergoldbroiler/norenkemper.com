import { useRef, useEffect } from "react";
import { useIntersection } from "hooks/useIntersection";

export const Company = () => {

    const company_element = useRef();
    const inViewport = useIntersection(company_element, '-100px');

    if(inViewport){
        console.log('now')
    }

    return(
        <section ref={company_element} className="w-100 h-100 bg-white" id="company">
          
        </section>
    )
}