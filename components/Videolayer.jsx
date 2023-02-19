import { useEffect } from "react";
import { Videobackground } from "./Videobackground";
import { effects } from "public/js/effects";

export const Videolayer = () => {


    useEffect(() => {
        effects.scrollEffects();
    });


    return (
        <section id={"layer_video"}>
            <Videobackground />
        </section>

       
    );
}