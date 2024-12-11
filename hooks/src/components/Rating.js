import React from 'react'
import { Rate } from 'antd';
const desc = ['terrible','bad','normal','good','wonderful'];
  
const Rating = ({movieRating,isMovieRating,rating,setRating}) => {
    const handelChange = value => {
        setRating(value);
    };
  return (
    isMovieRating ?
    <span className='ratingContent'>
        <Rate disabled value={movieRating}/>
    </span>
    :
    <span className='ratingContent'>
    <Rate tootlips={desc} onChange={handelChange} value={rating}/>
    </span>
    
  );
}

export default Rating
