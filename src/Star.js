import React, { useState } from 'react';
import "./star.css"

const Star = () => {
    const [clickStarRating, setClickStarRating] = useState(0)
    const [hoverRating,setHoverRating] = useState(0)
    return (<div className='main-container'>
        <div className='stars'>
            {
                [...Array(5)].map((_, index) => {
                    return <span className={`${index+1 <=  clickStarRating ? "active" : ""} ${index+1 <=  hoverRating ? "active" : ""}`}
                        onClick={() => setClickStarRating(index + 1)}
                        onMouseOver={()=>setHoverRating(index+1)}
                        onMouseOut={()=>setHoverRating(0)}
                    >
                        &#9734;
                    </span>
                })
            }
        </div>
        <h3>Rating :{" "}{clickStarRating}</h3>
    </div>)
}

export default Star