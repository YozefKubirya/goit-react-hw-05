import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../API";
import css from '../HomePage/HomePage.module.css'
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
 export default function HomePage(){
   const [movies,setMovies]=useState([]);
   const [error,setError]=useState(false)
   useEffect(()=>{
      async function getMovies(){
         try {
            setError(false)
            const fetchedMovies=await
         getTrendingMovies()
         setMovies(fetchedMovies);
         } catch  {
            setError(true)
         }
      }
      getMovies()
   },[])

   return <>
   <main>
      <h1 className={css.trendigBanner}>Trending today</h1>
   {movies.length > 0 && <MovieList movies={movies}/>}
   {error&& <Error/>}
   </main>
  
   </>
 }