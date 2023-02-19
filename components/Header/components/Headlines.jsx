

export const Headlines = ({textColor, classes}) => {

    return ( 
       <div className="headlines d-md-flex justify-content-end">
        <div>
            <h3 style={{color:textColor}} className={classes}>Ich kann Ihnen helfen</h3>
            <h1 style={{color:textColor}} className={classes}>Das können Sie mir glauben</h1>
        </div>
       </div>
    ); 
   
}

