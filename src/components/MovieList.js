import React, { useState } from 'react';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
        Title: 'Iron Man',
        Description: "Tony Stark, who has inherited the defense contractor Stark Industries from his father Howard Stark...",
        Poster:'https://vignette.wikia.nocookie.net/marvelstudios/images/1/1e/Iron_Man_Official_Poster.jpg/revision/latest?cb=20150825155355&path-prefix=fr',
        Rate: 5,
    },
    {
        Title: 'Iron Man The Sequal ',
        Description: "In Russia, the media covers Tony Stark's disclosure of his identity as Iron Man...",
        Poster:'https://geekytourist.files.wordpress.com/2019/03/iron-man-2-filming-locations.jpg',
        Rate: 4,
    },
    {
        Title: 'Iron Man Third Installment ',
        Description: "At a New Year's Eve party in 1999, Tony Stark meets scientist Maya Hansen...",
        Poster:'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',
        Rate: 3,
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