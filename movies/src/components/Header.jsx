
import "./Header.css"
import {Link} from "react-router-dom"
let Header=()=>{
    return <>
     

     <div className="header">
         <Link className="link no-hover" to="/"><h1 >MoviesApp</h1></Link>
         <Link className="link no-hover" to="/favorites"><h3  >Favorites</h3></Link>

     </div>
     
    
    </>
}

export default Header;