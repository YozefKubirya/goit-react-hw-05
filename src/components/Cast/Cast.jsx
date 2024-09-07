import { useEffect, useState } from "react"
import { getCast } from "../../API";
import { useParams } from "react-router-dom";
import { MOVIE_POSTER_LINK,defaultImg } from "../MovieInfo/MovieInfo";
import Error from "../Error/Error";
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
   <ul>{casts.map((cast)=>(
      <li key={cast.id}>
         <img src={cast.
profile_path ? MOVIE_POSTER_LINK+cast.
profile_path: defaultImg} alt="actor" width='250px' />
         <p>{cast.name}</p>
         <p>Character : {cast.character}</p>
      </li>
   ))}</ul>
   {error&& <Error/>}
   </>
}