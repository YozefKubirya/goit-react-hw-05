
import './App.css'
import { getTrendingMovies } from './API'
import { Routes ,Route,} from 'react-router-dom';
import { lazy,Suspense } from 'react';
// import HomePage from './pages/HomePage/HomePage';
// const Home= lazy(()=>import('./pages/Home/Home'))
import Navigation from './components/Navigation/Navigation';
const HomePage=lazy(()=>import('./pages/HomePage/HomePage'))
// import Movies from './pages/MoviesPage/MoviesPage';
const MoviesPage=lazy(()=>import('./pages/MoviesPage/MoviesPage'))

// import MovieDetalies from './pages/MovieDetalies/MovieDetalies';
const MovieDetalies=lazy(()=>import('./pages/MovieDetalies/MovieDetalies'))
// import Cast from './components/Cast/Cast';
const Cast =lazy(()=>import('./components/Cast/Cast'))
// import Reviews from './components/Reviews/Reviews';
const Reviews = lazy(()=>import('./components/Reviews/Reviews'))
const NotFoundPage=lazy(()=>import('./components/NotFoundPage/NotFoundPage'))
export default function App() {
 getTrendingMovies();
 

  return(
   <>
   <div className='container'>
  <Navigation/>
   <Suspense fallback={<><b>Loading.....</b></>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element={<MovieDetalies/>}>
        <Route path='cast' element={<Cast/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </Suspense>
    </div>
    </>
   
  ) 
    
}


