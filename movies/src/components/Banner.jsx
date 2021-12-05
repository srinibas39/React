import { movies } from "./getMovie";
import "./Banner.css"

let Banner = () => {
  console.log(movies);

  let movie=movies.results[2];
  console.log(movie)

  return (
    <>
    

    
        {
          movie===""?<>
          <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
          </div></> :
          <>  <div className="card banner-card">
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..." />
          <div className="card-body b-card ">
            <h5 className="card-title banner-title">{movie.original_title}</h5>
            <p className="card-text banner-text ">
             {
               movie.overview
             }
            </p>
            
          </div>
        </div></>
        }
      
      
    </>
  );
};

export default Banner;
