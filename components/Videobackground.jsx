
export const Videobackground = ({url, poster}) => {

    return (
        <video 
        className="videobackground"
            autoPlay 
            loop 
            muted  
            playsinline
            data-object-fit="cover"
            src="/sven.webm"
           />
    );
}