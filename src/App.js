import React, { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import { movieList } from "./Constants/data";
import AddCard from "./components/AddCard/AddCard";
import Filter from "./components/Filter/Filter";
import { BrowserRouter as Router ,Route } from "react-router-dom";
import Description from "./Description/Description";




import "./App.css";


function App() {
  const [movies, setMovies] = useState(movieList);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);
  const addmovies = (movie) => {
    setMovies([...movies, movie]);
  };

  const searchmovies = (search) => {
    console.log(search);
    setSearch(search);

  };
 const showCard=(id)=>{


    setMovies.filter((el) => id === el.id);
}

  return (
    
      <Router>
        <Route path="/(|Movielist)/" render={()=>(
        <div className="App">
        <h1 > Movie Application </h1>
        <div className="filter-add">
        <AddCard addmovies={addmovies} />
        <Filter searchmovies={searchmovies} setRate={setRate}/>
      </div>
      
        
        <MovieList rate={rate} list={movies} filterText={search} 
      showCard={showCard}/>
      
      </div>
        )}
      />
      
    
      <Route   path={`/Description`}  render={() => <Description  />}
      />
   
      </Router>
    
    
  );
}

export default App;
