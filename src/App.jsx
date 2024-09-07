
import './App.css'
import { getTrendingMovies } from './API'
import { Routes ,Route, } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Movies from './pages/MoviesPage/MoviesPage';
import Navigation from './components/Navigation/Navigation';
import MovieDetalies from './pages/MovieDetalies/MovieDetalies';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
export default function App() {
 getTrendingMovies();
 

  return(
   <>
  <Navigation/>
   
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:movieId' element={<MovieDetalies/>}>
        <Route path='cast' element={<Cast/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        </Route>
    </Routes>
    </>
   
  ) 
    
}


