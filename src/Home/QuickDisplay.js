import React from 'react'
import {Link} from 'react-router-dom'



const QuickDisplay = ({mealType}) => {
    
if(mealType){
    return (
        mealType.map((item)=> {
         return(  
            <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
            <div className="tileContainer">
               <div className="tileComponent1">
                   <img src={item.meal_image} alt="breakfast"/>
                </div>
                 <div className="tileComponent2">
                     <div className="componentHeading">
                         {item.mealtype}
                     </div>
                    <div className="componentSubHeading">
                        {item.content}
                   </div>
               </div>
             </div>
            </Link>
            
         )
        })
    )   
}
}

export default QuickDisplay