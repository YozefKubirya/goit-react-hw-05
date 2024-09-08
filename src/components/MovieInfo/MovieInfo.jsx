import css from '../MovieInfo/MovieInfo.module.css'

export const MOVIE_POSTER_LINK='https://image.tmdb.org/t/p/w500/';
export const defaultImg = "http://dummyimage.com/150x200/c4c4c8/646cff.gif&text=The+image!";
export default function  MovieInfo({ title,score,overview,genres,backdrop_path})
{
   const userScore=Math.round(score)*10;
   return<>
  <div className={css.movieCardContainer}>
      <img src={backdrop_path? MOVIE_POSTER_LINK+backdrop_path :defaultImg } alt="movie-poster" className={css.imageMovie}/>

   <div>

   <h2 className={css.title}>{title}</h2>
   <p className={css.text}>
      <span className={css.span}> User score</span>  : {userScore}%</p>
    <p className={css.text}> 
      <span className={css.span}> Overview</span> : {overview}</p>

    <p className={css.text}>
    <span className={css.span}>Genres : </span>
    {genres.length > 0 ? (
            genres.map(({ name }) => name).join(", ")
          ) : (
            <>Sorry, not found</>
          )}
    </p>
    {/* {genres.map((genre)=>(
      <p key={genre.id} className={css.text}>{genre.name}</p>))} */}
   </div>

   
   </div>
  


   
   </>
}