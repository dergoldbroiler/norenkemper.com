import Image from "next/image";

export const Logo = ({url, visible}) => {

    if(!visible){
        return ( <Image
            alt="Logo"
            src={url}
            width={1000}
            height={1000}
            className="logo no-opac"
            
          />); 
    }
    return ( <Image
        alt="Logo"
        src={url}
        width={1000}
        height={1000}
        className="logo"
        
      />); 
   
}