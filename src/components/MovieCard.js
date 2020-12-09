import React,{useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import StarRatingComponent from "react-star-rating-component";

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
    <Card.Text>
{el.Description}
    </Card.Text>
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
