export const MOVIE_POSTER_LINK='https://image.tmdb.org/t/p/w500/';
export const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'
export default function  MovieInfo({ title,score,overview,genres,backdrop_path})
{
   const userScore=Math.round(score)*10;
   return<>
   <div>
      <img src={backdrop_path? MOVIE_POSTER_LINK+backdrop_path :defaultImg } alt="movie-poster" />
   <ul>
   <li><h2>{title}</h2></li>
   <li><p> User score : {userScore}%</p></li>
   <li><b>Overview</b> : <p>{overview}</p></li>
   <li><b>Genres</b> : {genres.map((genre)=>(
      <p key={genre.id}>{genre.name}</p>)
   )}</li>
</ul>
</div>
   
   </>
}