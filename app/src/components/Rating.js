import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'



function Rating({value, text, color}) {
    return (
        <div className="rating">
            <span>
                <i style={{color}}>
                    {
                        value >= 1 ? ( <FontAwesomeIcon icon={fasStar} /> ):(
                            value >= 0.5 ? (<FontAwesomeIcon icon={faStarHalfAlt} /> ): ( <FontAwesomeIcon icon={farStar} /> )
                        )
                    }

                </i>
            </span>
            <span>
                <i style={{color}}>
                    {
                        value >= 2 ? ( <FontAwesomeIcon icon={fasStar} /> ):(
                            value >= 1.5 ? (<FontAwesomeIcon icon={faStarHalfAlt} /> ): ( <FontAwesomeIcon icon={farStar} /> )
                        )
                    }

                </i>
            </span>
            <span>
                <i style={{color}}>
                    {
                        value >= 3 ? ( <FontAwesomeIcon icon={fasStar} /> ):(
                            value >= 2.5 ? (<FontAwesomeIcon icon={faStarHalfAlt} /> ): ( <FontAwesomeIcon icon={farStar} /> )
                        )
                    }

                </i>
            </span>
            <span>
                <i style={{color}}>
                    {
                        value >= 4 ? ( <FontAwesomeIcon icon={fasStar} /> ):(
                            value >= 3.5 ? (<FontAwesomeIcon icon={faStarHalfAlt} /> ): ( <FontAwesomeIcon icon={farStar} /> )
                        )
                    }

                </i>
            </span>
            <span>
                <i style={{color}}>
                    {
                        value >= 5 ? ( <FontAwesomeIcon icon={fasStar} /> ):(
                            value >= 4.5 ? (<FontAwesomeIcon icon={faStarHalfAlt} /> ): ( <FontAwesomeIcon icon={farStar} /> )
                        )
                    }

                </i>
            </span>
            
            <span>{ text && text }</span>
            
        </div>
    )
}

export default Rating
