import React, { useState } from 'react';
import {FaAngleLeft} from 'react-icons/all';
import {FaAngleRight} from 'react-icons/all';
import {FaQuoteRight} from 'react-icons/all';
import people from "./Reviews";
import './App.css';

 function Review()
 {
    const [index,setindex]=useState(0);
    const {name ,job,image,text}=people[index];

    return(
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                {/* <span>
                        <FaQuoteRight/>
                </span> */}
                
            </div>
            <h4 className="author">{name}</h4>
            <p className="job" >{job}</p>
            <p className="text">{text}</p>
             <FaAngleRight className="forward_arrow" onClick={()=>{
                 const forw=index+1;
                 if(forw===4)
                 setindex(0);
                 else
                 setindex(forw);
             }}/>
             <FaAngleLeft className="backward_arraw" onClick={()=>{
                 const bacw=index-1;
                 if(bacw===-1)
                 setindex(3);
                 else
                 setindex(bacw);
             }}/>
        </article>
    );
 }
 export default Review;