import { useSearchParams } from "react-router-dom";
export default function SearchForm (){
   const [params,setParams]=useSearchParams();
   const handleSubmit=(e)=>{
      e.preventDefault();
      const form=e.target;
params.set('movie',form.elements.movie.value)
setParams(params);
      form.reset()
   }
   return<>
   <form onSubmit={handleSubmit}>
      <input type="text" name='movie' />
      <button type="submit">Search</button>
   </form>
   </>
}