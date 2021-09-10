import React from 'react'
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    

        return (
       <div>
    
           {props.list.map((elt,index)=><MovieCard key={index} film={elt}></MovieCard>)} 
       </div>
      
       );
}

export default MovieList
