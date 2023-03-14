import { useRef, useEffect } from "react";


export const Unternehmen = () => {

    const company_element = useRef();
 

    useEffect(()=>{
       
    });

   
   
    return(
        <section  className="w-100 h-100 bg-white" id="company">
            <h1 className="text-center">Die Headline für den<br/>Bereich Unternehmen</h1>

           

            <div className="media-content-flex">
                <img src="images/sven01.JPG" />

                <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            </div>
        </section>
    )
}