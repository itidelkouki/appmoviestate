
import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';


function AddCard (props)  {


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [title, setTitle] = useState("");
const handleChangeTitle = (el) => {
    setTitle(el.target.value);
  };

const [description, setDescription] = useState("");
const handleChangeDescription = (elm) => {
  setDescription(elm.target.value);
};

const [posterURL, setPosterURL] = useState("");
const handleChangePosterURL = (url) => {
  setPosterURL(url.target.value);
};

const [rating, setRating] = useState(0);
const handleChangeRating= (rate) => {
  setRating(rate.target.value)};

  const movie = [
    { title:title, description:description, id:props.movies.length+1, posterURL:posterURL, rating:rating }]
  
 return (
    <div className="new-Card">
    
    <Button className="addBoutton" variant="primary" onClick={handleShow}>
      +
    </Button>  

    <Modal className="movie-Modal" show={show} onHide={handleClose}>
    <Modal.Title className="modal-Title">Add new movie</Modal.Title>
        
        <input type="text" placeholder="New title" name="title" value={title.value} onChange={handleChangeTitle}/>
        <input type="text" placeholder="New description" name="description" value={description.value} onChange={handleChangeDescription}/>
        
        <input type="text" placeholder="New posterURL" name="posterURL" value={posterURL.value}  onChange={handleChangePosterURL}/>
        <input type="text" placeholder="New rating" name="rating" value={rating.value} onChange={handleChangeRating}/>

      <Modal.Footer>
        <Button  className="close-Button"  variant="secondary" onClick={handleClose}>
          Close

        </Button>
        <Button    className="submit-Button"  variant="primary" onClick={()=> props.Newmovie(movie) }>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
 



    </div>
    );
  }
  
  export default AddCard;




