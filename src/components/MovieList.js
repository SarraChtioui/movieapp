import React, { useState } from 'react';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import button from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const MovieList = () => {
  const [movies, setMovies] = useState([
    {
        Title: 'Iron Man',
        Description:<button type="button" class="btn btn-secondary">Description</button>,
        Poster:'https://vignette.wikia.nocookie.net/marvelstudios/images/1/1e/Iron_Man_Official_Poster.jpg/revision/latest?cb=20150825155355&path-prefix=fr',
        Rate: 5,
        Id:uuidv4(),
    },
    {
        Title: 'Iron Man The Sequal ',
        Description:<button type="button" class="btn btn-secondary">Description</button>,
        Poster:'https://geekytourist.files.wordpress.com/2019/03/iron-man-2-filming-locations.jpg',
        Rate: 4,
        Id:uuidv4(),
    },
    {
        Title: 'Iron Man Third Installment ',
        Description:<button type="button" class="btn btn-secondary">Description</button>,
        Poster:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',
        Rate: 3,
        Id:uuidv4(),
    },
]);

const add = (Title, Description, Poster, Rate) => {
  setMovies ([...movies,{Title, Description, Poster, Rate}])
}
	return (
		<>
    
    <MovieCard movies = {movies}/>
    <AddMovie add = {add}/> 
		</>
	);
};
export default MovieList;