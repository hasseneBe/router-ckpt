import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';



const MovieCard = (props) => {
return(
<Card style={{width: '18rem' }}>
<Link to={`/description/${props.film.id}`}>
<Card.Img variant="top" src={props.film.PosterURL} />
</Link>
<Card.Body>
{/* <Link to={{pathname:,state:props.film}}> */}
<Link to={`/description/${props.film.id}`}>
  <Card.Title>{props.film.Title}</Card.Title>
  </Link>
  <StarRatingComponent value={props.film.Rating}/>
  <Card.Text> {props.film.Description}</Card.Text>
  </Card.Body>
   
</Card>)
}

export default MovieCard
