import React,{useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import StarRatingComponent from "react-star-rating-component"
import button from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MovieList from './MovieList';


const MovieCard =(props) => {
    const [search,setSearch] = useState('')
    const [star,setStar] = useState('')
    const newMovies = props.movies.filter(movie =>
        movie.Title.toLowerCase().includes(search.toLowerCase().trim()) && movie.Rate >= star)

    return (
<>
<div className = "search"><input type = "text" placeholder = "Search" onChange = {el => setSearch(el.target.value)} />
<StarRatingComponent
                    name="Rate"
                    starCount={5}
                    
                    onStarClick={(nextValue) => setStar(nextValue)}


                  />
</div>
        
        <div className='cards'>
        
        {newMovies.map(el => (
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src = {el.Poster} />
  <Card.Body>
    <Card.Title>{el.Title}</Card.Title>
    <Card.button>
{/* <Link to={'/movie/${el.Id}'}><button>movie</button></Link> */}
    </Card.button>
    <StarRatingComponent
                    name="Rate"
                    starCount={5}
                    value={el.Rate}
                  />

  </Card.Body>
        </Card>) ) }
        </div>
        </>
    )
}

export default MovieCard
