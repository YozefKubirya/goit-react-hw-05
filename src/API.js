import axios from "axios";
// const API_KEY='1751ed552758886790b5045f1f278379';
const ACCESS_TOKEN='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzUxZWQ1NTI3NTg4ODY3OTBiNTA0NWYxZjI3ODM3OSIsIm5iZiI6MTcyNTY4MTY0NS4zODU5NTEsInN1YiI6IjY1NTNlY2FkOTAzYzUyMDBhYzZkZGIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPktFGmSNCnDB8WRKUB8wPXgHnCZ2QzWagtoAooAtjw'
axios.defaults.baseURL='https://api.themoviedb.org/3'
const options={
   headers:{
      Authorization:  ACCESS_TOKEN,
      
   }
}

export const getTrendingMovies= async ()=>{
   const response= await axios.get('/trending/movie/day',options);
   // console.log(response.data.results)
   return response.data.results;
   // 
}

export const getMovieById=async (movieId)=>{
   const response =await axios.get(`/movie/${movieId}`,options)
   // console.log(response.data)
   return response.data;
};

export const getSearchMovie=async (movie)=>{
  const response= await axios.get(`/search/movie?query=${movie}`,options);
  return response.data.results;
}

export const getCast =async (movieId)=>{
   const response= await axios.get (`/movie/${movieId}/credits?`,options)
   // console.log(response.data)
   return response.data.cast
}

export const getReviews=async (movieId)=>{
   const response = await axios.get(`/movie/${movieId}/reviews?`,options);
   console.log(response.data.results)
   return response.data.results
}
