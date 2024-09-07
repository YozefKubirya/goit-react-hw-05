import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getReviews } from "../../API";
import Error from "../Error/Error";

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
<ul>
  
{reviews.length > 0  ? reviews.map((review)=>(
      <li key={review.id}>
         <p>Author : {review.author}</p>
         <p>{review.content}</p>
      </li>
    
   )) : <>There is no reviews</>}

    {error && <Error/>  }
</ul>
   </>
}