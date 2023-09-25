import { useRef, useEffect, useState } from "react";
import { Videobackground } from "components/Videobackground";
import { Imagebackground } from "components/Imagebackground";
import { Headlines } from "components/Pages/Homepage/Headlines";
import { Navigation } from "components/Pages/Homepage/Navigation";
import { Logo } from "components/shared/Logo";
const empty_homepage_state = {
    video: false,
    image: false
}

export const Homepage = ({image, video, navScrolling}) => {

    const [homepage_state, setHomepageState] = useState(empty_homepage_state);

    useEffect(()=>{
       setTimeout(() => {
        let new_state = {
            ... homepage_state,
            video: video,
            image: image
        }
        setHomepageState(new_state);
       }, 1000);
    },[]);



    /*
    * animate the headline
    * for the first 2 seconds
    */
    if(!homepage_state.video && !homepage_state.image) {
        return(
            <section  className="w-100 h-100" id="homepage">
                <Headlines textColor="#000" animation="homepage"/>
            </section>
        )
    }

    if(homepage_state.video && !homepage_state.image) {
        return(
            <>
        <Videobackground />
        <section  className="w-100 h-100" id="homepage layer_video">
            <Logo url="/images/logo.png" />
            <Navigation navScrolling={navScrolling}/>
            <Headlines textColor="#fff"  />
        </section>
        </>
        )
    }
     
    if(!homepage_state.video && homepage_state.image) {
        return(
        <>
        <Imagebackground />
        <section  className="w-100 h-100 colored-bg" id="homepage layer_video">
            <Logo url="/images/logo.png" />
            <Navigation navScrolling={navScrolling}/>
            <Headlines textColor="#fff"  />
        </section>
        </>
        )
    }
}