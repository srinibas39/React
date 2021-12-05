import { useEffect, useState } from "react";
import { movies } from "./getMovie";
import "./List.css";
import axios from "axios";
import { supportsColor } from "chalk";

let List = () => {
  //   let allmovies = movies.results;
  const [hover, setHover] = useState("");
  const [parr, setParr] = useState([1]); //pagination arr
  const [currPage, setCurrPage] = useState(1);
  const [allmovies, setAllmovies] = useState([]);
  const [fav, setFav] = useState([]); //i will store all the movieID
 
  useEffect(async () => {
    let dataArr = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ba1281a595d7c0a413ef58e1504ef7ac&language=en-US&page=${currPage}`
    );

    let allm = dataArr.data.results;
    setAllmovies([...allm]);
  });
  let changeMovies = async () => {
    let dataArr = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ba1281a595d7c0a413ef58e1504ef7ac&language=en-US&page=${currPage}`
    );

    let allm = dataArr.data.results;
    setAllmovies([...allm]);
  };
  let handleNext = () => {
    let narr = [];
    for (let i = 1; i <= parr.length + 1; i++) {
      narr.push(i);
    }
    setParr([...narr]);
    setCurrPage(currPage + 1);
    changeMovies();
  };
  let handlePrev = () => {
    if (currPage != 1) {
      setCurrPage(currPage - 1);
      changeMovies();
    }
  };
  let handlePage = (page) => {
    if (currPage != page) {
      setCurrPage(page);
      changeMovies();
    }
  };

  let handleFav = (movieObj) => {
    let oldData = JSON.parse(localStorage.getItem("movies") || "[]");
    if (fav.includes(movieObj.id)) {
      //Then remove movie from oldData
      oldData=oldData.filter((m) => {
        return m.id != movieObj.id;
      });
    } else {
      oldData.push(movieObj);
    }
    localStorage.setItem("movies", JSON.stringify(oldData));
    handleFavState();
  };
  let handleFavState = () => {
   
    let oldData = JSON.parse(localStorage.getItem("movies") || "[]");
    let temp=oldData.map((m)=>{
       return m.id
    })

    setFav([...temp]);
    

  };
  
  return (
    <>
      {allmovies.length == 0 ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="list">
          <h3>Trending</h3>
          <div className="list-cards">
            {allmovies.map((movieObj, idx) => {
              return (
                <div
                  key={idx}
                  className="card movie-card"
                  onMouseEnter={() => {
                    setHover(movieObj.id);
                  }}
                  onMouseLeave={() => {
                    setHover("");
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                  {hover == movieObj.id && (
                    <a
                      onClick={() => {
                        handleFav(movieObj);
                      }}
                      className="btn btn-primary font a-style"
                    >
                     {fav.includes(movieObj.id)?"Remove from favorites":"Add to favorites"}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="pages">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => {
                  handlePrev();
                }}
              >
                Previous
              </a>
            </li>
            {parr.map((el, idx) => {
              return (
                <li
                  onClick={() => {
                    handlePage();
                  }}
                  key={idx}
                  className="page-item"
                >
                  <a className="page-link">{el}</a>
                </li>
              );
            })}

            <li className="page-item">
              <a
                className="page-link"
                onClick={() => {
                  handleNext();
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default List;
