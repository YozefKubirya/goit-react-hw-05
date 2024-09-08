import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getReviews } from "../../API";
import Error from "../Error/Error";
import css from '../Reviews/Reviews.module.css'
export default function Reviews(){
   const [reviews,setReviews]=useState([])
   const {movieId}=useParams();
   const [error,setError]=useState(false)
   useEffect(()=>{
      async function getDataReviews(){
         try {
            setError(false)
            const fetchedReviews= await getReviews(movieId)
         setReviews(fetchedReviews)
         
         } catch  {
            setError(true)
         }
      }
      getDataReviews()
   },[movieId])
   return <>
<div className={css.reviewsContainer}> 
<ul>
 <h2 className={css.reviewsTitle}>Movie Reviews:</h2> 
{reviews.length > 0  ? reviews.map((review)=>(
      <li key={review.id}>
         <p className={css.reviewsText}> 
            <span className={css.reviewsSpan}>Author:</span> 
            {review.author}
         </p>
         <p className={css.reviewsText}>{review.content}
         </p>
      </li>
    
   )) : <span className={css.reviewsSpan}>There is no reviews,sorry..</span>}

    {error && <Error/>  }
</ul>
</div>

   </>
}