import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const App = () => {
    
    return (
        <Router>
        <div className='container-fluid movie-app'>
            <div className='row'>
                <MovieList/>
                <Route path = "/movie/:id"/>
            </div>
        </div>
        </Router>
    );
};
export default App;


















