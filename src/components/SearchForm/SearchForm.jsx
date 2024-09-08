import { useSearchParams } from "react-router-dom";
import css from '../SearchForm/SearchForm.module.css'
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
   <div className={css.formContainer}>
   <form onSubmit={handleSubmit} className={css.form}>
      <input className={css.formInput}type="text" name='movie' />
      <button type="submit" className={css.formButton}>Search</button>
   </form>
   </div>
  
   </>
}