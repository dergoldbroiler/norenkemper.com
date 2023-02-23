import { useEffect } from "react";
import { Videobackground } from "./Videobackground";
import { effects } from "public/js/effects";

import { Headlines } from "./Header/components/Headlines";

export const Videolayer = () => {


    useEffect(() => {
        effects.scrollEffects();
    });


    return (
        <section id={"layer_video"}>
                  
                  <Headlines textColor="#fff" classes="no-animation fadein" />
            <Videobackground />
        </section>

       
    );
}