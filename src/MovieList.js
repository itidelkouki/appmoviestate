import React from 'react';
import {Card,ListGroup, ListGroupItem} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


const ListMovie = (props) => {
 
    return (
        <div className="movieCard"> { props.movies.map((el)=> 
    <Card style={{width: '18rem'}}>
    <Card.Img variant="top"  src={el.posterURL} height= "300px" width= '300'  />
    <Card.Body>
    <Card.Text>{el.id}</Card.Text>
      <Card.Title className="cardTitle">{el.title}</Card.Title>
      <Card.Text>{el.description}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <StarRatingComponent value= {el.rating}/>
    </ListGroup>
    </Card>)}
      
        </div>
      );}

export default ListMovie;

