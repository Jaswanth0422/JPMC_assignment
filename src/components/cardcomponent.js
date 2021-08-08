import React from 'react';


const Card=(props)=>{

    
    return(
        
        <div className="body">
            {console.log(props)}
          {props.user.name}
        </div>
    )
}

export default Card;