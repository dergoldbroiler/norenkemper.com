import { useRef, useEffect, useState } from "react";
import { Videobackground } from "components/Videobackground";
import { Headlines } from "components/Pages/Homepage/Headlines";
import { Navigation } from "components/Pages/Homepage/Navigation";
import { Logo } from "components/shared/Logo";
const empty_homepage_state = {
    video: false
}

export const Homepage = () => {

    const [homepage_state, setHomepageState] = useState(empty_homepage_state);

    useEffect(()=>{
       setTimeout(() => {
        let new_state = {
            ... homepage_state,
            video: true
        }
        setHomepageState(new_state);
       }, 2000);
    },[]);

    

    const handleClick = (e, id) => {
     
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
            }
        );
    }

    /*
    * animate the headline
    * for the first 2 seconds
    */
    if(!homepage_state.video) {
        return(
            <section  className="w-100 h-100" id="homepage">
                <Headlines textColor="#000" animation="homepage"/>
            </section>
        )
    }
     
    return(
        <>
        <Videobackground />
        <section  className="w-100 h-100" id="homepage layer_video">
            <Logo url="/images/logo.png" />
            <Navigation handleClick={handleClick}/>
            <Headlines textColor="#fff"  />
        </section>
        </>
    )
}