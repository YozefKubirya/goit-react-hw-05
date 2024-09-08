import { useEffect, useState } from "react"
import { getCast } from "../../API";
import { useParams } from "react-router-dom";
import { MOVIE_POSTER_LINK,defaultImg } from "../MovieInfo/MovieInfo";
import Error from "../Error/Error";
import css from '../Cast/Cast.module.css'
export default function Cast (){
   const [casts,setCasts]=useState([]);
   const {movieId}=useParams();
   const [error,setError]=useState(false)
useEffect(()=>{
   async function getCredits(){
      try {
         setError(false)
         const fetchedCasts=await getCast(movieId)
      setCasts(fetchedCasts)
      } catch  {
      setError(true);   
      }
   }
   getCredits()
},[movieId
])

   return<>
   <div>
   <h2>Movie actors:</h2>
   <ul className={css.castList}>{casts.map((cast)=>(
      <li key={cast.id} className={css.castLi}>
         <img src={cast.
profile_path ? MOVIE_POSTER_LINK+cast.
profile_path : defaultImg} alt="actor image" width='250px' className={css.castImg}/>
<p className={css.castP}>Name:{cast.name}</p>
<p className={css.castP}>Character:{cast.character}</p>
      </li>
   ))}</ul>

   </div>
  
   {error&& <Error/>}
   </>
}