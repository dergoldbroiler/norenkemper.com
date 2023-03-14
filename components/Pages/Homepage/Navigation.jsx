

export const Navigation = ({url, handleClick}) => {

    return ( 
        <ul className="nav_main" >
    
            <li>
                <a href="#unternehmen" onClick={e => handleClick(e,'#unternehmen')}>Für Unternehmen</a>
            </li>
            
            <li>
                <a href="#nonprofit" onClick={e => handleClick(e,'#ngo')}>Für NGOs und Non-Profits</a>
            </li>
            <li>
                <a href="#coaching">Coaching</a>
            </li>
            <li>
                <a href="#unternehmen">Der Prozess</a>
            </li>
            <li>
                <a href="#ueber">Über</a>
            </li>
            <li>
                <a href="#qunda">Q&A</a>
            </li>
            <li>
                <a href="#referenzen">Referenzen</a>
            </li>
            <li>
                <a href="#kontakt">Kontakt</a>
            </li>
        </ul>
    ); 
   
}

