import { NavLink

 } from "react-router-dom"
 import css from '../Navigation/Navigation.module.css'
export default function Navigation(){
   return <>
   <header >
    <nav className={css.nav}> 
    <NavLink to='/' className={css.link}>
    Home
   </NavLink>
   
   <NavLink to='/movies' className={css.link}>Movies</NavLink>
   </nav>
   </header>
   </>
}