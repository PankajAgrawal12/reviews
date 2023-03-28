import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index,setIndex]=useState(0);
    const {name,job,image,text}=people[index];

    const check=(number)=>{
        if(number>people.lenght-1){
            return 0;
        }
        if(number<0){
            return people.length-1;
        }
        return number;
    };
    const next=()=>{
        setIndex((index)=>{
            let value=index+1;
            return check(value);
        });
    };
    const prev=()=>{
        setIndex((index)=>{
            let value=index-1;
            return check(value);
        });
    };
    const random=()=>{
        let rand= Math.floor(Math.random()*people.length);
        if(rand===index){
            rand=index+1;            
        }
        setIndex(check(rand));
    };



  return (
        <article className='review'>
            <div className='img-container'>
                <img  src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'><h2>{name}</h2></h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="button-container">
                <button onClick={prev} className='prev-btn'>
                    <FaChevronLeft/>
                </button>
                <button onClick={next} className='next-btn'>
                    <FaChevronRight/>
                </button>
            </div>
                <button onClick={random} className='random-btn'>
                    Surprise me!
                </button>
        </article>
  );
};

export default Review;

    // const random=()=>{
    //     setIndex(()=>{
    //         let rand= Math.floor(Math.random()*people.length);
    //         if(rand==index)
    //             rand=index+1;            
    //         console.log(rand);
    //         return(check(rand));
    //     })
    // }