import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function Search(props) {

const [searchTerm, setSearchTerm] = useState("");
const handleChange = event => {
      setSearchTerm(event.target.value);
    };

const [rating, setRating] = useState(1);

/*const onStarClick=(nextValue) =>{

  props.searchbyRating({rating: nextValue});
  setRating(1);

};*/


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={()=> props.searchmovie(searchTerm)}>Search</button>

      <StarRatingComponent value= {rating} starCount={5}  />


    </div>
  );
}

export default Search;