import css from '../MovieList/MovieList.module.css'
import { Link,useLocation } from "react-router-dom"
export default function MovieList({movies}){
   const location =useLocation();
   console.log(location)
   return <>
   <div className={css.movieListContainer}>
   <ul className={css.movieList}>
   {movies.map((movie)=>
   (<li key={movie.id}>
<Link to={`/movies/${movie.id}`} state={{from:location}} className={css.movieListLink}>{movie.title}</Link>
   </li>))}
  </ul>
   </div>
   
   </>
}