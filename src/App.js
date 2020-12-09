import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
const App = () => {
    
    return (
        <div className='container-fluid movie-app'>
            <div className='row'>
                <MovieList/>
            </div>
        </div>
    );
};
export default App;


















