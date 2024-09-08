import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../API";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import Error from "../../components/Error/Error";
import css from '../MoviesPage/MoviesPage.module.css'
export default function MoviesPage (){
   const [movies,setMovies]=useState([]);
   const [params]=useSearchParams()
   const [error,setError]=useState(false)
   const movie= params.get('movie') ?? ''
useEffect(()=>{
   async function getSearch(){
     try {
      setError(false)
      const fetchedData= await getSearchMovie(movie);
      console.log(fetchedData)
      setMovies(fetchedData)
     } catch  {
      setError(true)
     }
   }
   getSearch();
},[movie])

  
   return<>
   <h2 className={css.moviesPageTitle}>Search Movie</h2>
   
   <SearchForm/>
   {movies.length > 0 && <MovieList movies={movies}/>}
  {error&& <Error/>}
   </>
}