import { Suspense, useEffect, useRef, useState } from "react"
import { getMovieById } from "../../API"
import { useParams,Link, useLocation ,Outlet} from "react-router-dom";
import css from '../MovieDetalies/MovieDetalies.module.css'
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
  
{movie && <MovieInfo title={movie.title} overview={movie.overview} score={movie.
vote_average
} genres={movie.genres} backdrop_path={movie.poster_path}/> }
   

<Link to={backLinkRef.current}
className={css.goBackLink}>Go back</Link>
{error&& <Error/>}
<ul className={css.ulListInfo}>
<li><Link to='cast'  className={css.reditLink}>Cast</Link></li>
<li><Link to='reviews' className={css.reditLink}>Reviews</Link></li>
</ul>
<Suspense fallback={<><b>Loading....</b></>}>
<Outlet/>
</Suspense>

   </>
}