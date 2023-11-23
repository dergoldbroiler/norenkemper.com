
export const Videobackground = ({url, poster}) => {

    return (
        <video 
        className="videobackground"
            autoPlay 
            loop 
            muted  
            data-object-fit="cover"
            src="/sven.webm"
           />
    );
}