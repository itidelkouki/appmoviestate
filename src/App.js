
import React from 'react';
import './App.css';
import MovieList from './MovieList';
import AddCard from './AddCard';
import Search from './Search';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movies : [
      { title:"Eté 85", description:"Description1", id:1, posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVD5n0S9u16LCofYfQ4OW6BM5chK2nJ9B2Q&usqp=CAU", rating : "4" },
      { title:"We can do it", description:"Description2", id:2, posterURL: "https://f.hellowork.com/blogdumoderateur/2013/05/We-Can-Do-It-Rosie-the-Riveter-Poster-Vintage-Poster.jpg", rating : "1" },
      { title:"Walk ride Rodeo", description:"Description3", id:3, posterURL: "https://lestrouvaillesdesarah.com/wp-content/uploads/2019/03/MV5BODU4MjA5MDE1MF5BMl5BanBnXkFtZTgwMzM2MDA0NzM@._V1_-800x1185.jpg", rating : "3" },
    
    ],
  searchResult:"",
  rating:1,
  }
    };
 
  addNewmovie =(movie)=>{this.setState({
      movies: this.state.movies.concat(movie), });};

  
  searchmovie=(m)=>{this.setState({
    movies: this.state.movies.filter(el =>
    el.title.toLowerCase().includes(m)),
    
    searchResult: m });};

  searchbyRating=(rate)=>{this.setState({
    movies: this.state.movies.find(el =>
    el.rating===rate),
    
  });};


  render() {
    return(
    <div className="App">
      <h1>Movie Application</h1>
      <AddCard    movies={this.state.movies} Newmovie={(movie)=> this.addNewmovie(movie)}/>,
      <MovieList movies={this.state.movies}   searching={(m)=> this.searchResult (m)} />,
      <Search movies={this.state.movies}   searchmovie={(el)=>this.searchmovie (el)}  searchbyRating={(r)=>this.searchbyRating(r)} />,
    </div>
 );
}}

export default App;