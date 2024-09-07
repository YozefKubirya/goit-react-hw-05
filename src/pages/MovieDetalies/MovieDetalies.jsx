import { useEffect, useRef, useState } from "react"
import { getMovieById } from "../../API"
import { useParams,Link, useLocation ,Outlet} from "react-router-dom";

import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Error from "../../components/Error/Error";

export default function MovieDetalies (){
const {movieId}=useParams();
const [movie, setMovie]= useState(null);
const location=useLocation();
const backLinkRef=useRef(location.state?.from ?? '/movies')
const [error,setError]=useState(false)
useEffect(()=>{

async function getMovie(){
   
  try {
   setError(false)
   const fetchedMovie=await getMovieById(movieId);
   setMovie(fetchedMovie);
   
  } catch  {
   setError(true)
  }
}
getMovie()
},[movieId])

   return<>
   Movie Detalies

<Link to={backLinkRef.current}
>Go back</Link>

    {movie && <MovieInfo title={movie.title} overview={movie.overview} score={movie.
vote_average
} genres={movie.genres} backdrop_path={movie.backdrop_path}/> }
{error&& <Error/>}
<ul><li><Link to='cast' >Cast</Link></li>
<li><Link to='reviews'>Reviews</Link></li></ul>
<Outlet/>
   </>
}