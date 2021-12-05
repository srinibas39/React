import { useEffect, useState } from "react";

let Favorites = () => {
  // let allmovies = movies.results;
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [movieObj, setMovieObj] = useState({
    movie: [],
    genre: [],
  });
  const [searchText, setSearchText] = useState("");
  const [limit, setLimit] = useState(5);
  const [currPage, setCurrPage] = useState(1);

  let allgenreIds = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  // let tempGenreList = [];
  // allmovies.forEach((movieObj) => {
  //   if (!tempGenreList.includes(allgenreIds[movieObj.genre_ids[0]])) {
  //     tempGenreList.push(allgenreIds[movieObj.genre_ids[0]]);
  //   }
  // });
  // tempGenreList.unshift("All Genres");

  useEffect(() => {
    //using useEffect because I am fetching data from database
    let moviesData = JSON.parse(localStorage.getItem("movies") || "[]"); //[{mov1},{mov2},{mov3}]

    let temp = [];
    moviesData.forEach((movie) => {
      if (!temp.includes(allgenreIds[movie.genre_ids[0]])) {
        temp.push(allgenreIds[movie.genre_ids[0]]);
      }
    });
    temp.unshift("All Genres");
    //Now set the state of movie and genre

    setMovieObj({
      movie: [...moviesData],
      genre: [...temp],
    });
  }, []);
  let handleGenre = (gen) => {
    setCurrGenre(gen);
  };
  let handleRatingA = () => {
    let tmovies = movieObj.movie;
    tmovies.sort((objA, objB) => {
      return objA.vote_average - objB.vote_average;
    });
    setMovieObj({
      movie: [...tmovies],
      genre: [...movieObj.genre],
    });
  };
  let handleRatingD = () => {
    let tmovies = movieObj.movie;
    tmovies.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });
    setMovieObj({
      movie: [...tmovies],
      genre: [...movieObj.genre],
    });
  };
  let handlePopularityA = () => {
    let tmovies = movieObj.movie;
    tmovies.sort(function (objA, objB) {
      return objA.popularity - objB.popularity;
    });
    setMovieObj({
      movie: [...tmovies],
      genre: [...movieObj.genre],
    });
  };
  let handlePopularityD = () => {
    let tmovies = movieObj.movie;
    tmovies.sort(function (objA, objB) {
      return objB.popularity - objA.popularity;
    });
    setMovieObj({
      movie: [...tmovies],
      genre: [...movieObj.genre],
    });
  };
  let handleDelete = (id) => {
    let tmov = movieObj.movie;
    tmov = tmov.filter((movie) => {
      return movie.id != id;
    });
    setMovieObj({
      movie: [...tmov],
      genre: [...movieObj.genre],
    });
    localStorage.setItem("movies",JSON.stringify(tmov));
  };
  let filterArr = [];
  if (searchText === "") {
    filterArr = movieObj.movie;
  } else {
    filterArr = movieObj.movie.filter((mObj) => {
      return mObj.original_title
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }

  if (currGenre !== "All Genres") {
    filterArr = movieObj.movie.filter((mov) => {
      return allgenreIds[mov.genre_ids[0]] == currGenre; //returning the movies whose genre are equal to current genre.
    });
  }
  //implementation of pagination.
  let pages = Math.ceil(filterArr.length / limit);

  let pagesArr = [];
  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i);
  }

  let si = (currPage - 1) * limit;
  let ei = si + limit;

  filterArr = filterArr.slice(si, ei);

  return (
    <>
      <div style={{ margin: "0px" }} className="row">
        <div className="col-3">
          <ul className="list-group m-1">
            {movieObj.genre.map((el, index) => {
              return currGenre === el ? (
                <li
                  style={{
                    backgroundColor: "#EF4444",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  key={index}
                  className="list-group-item "
                >
                  {el}
                </li>
              ) : (
                <li
                  onClick={() => {
                    handleGenre(el);
                  }}
                  key={index}
                  className="list-group-item "
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-9 ">
          <div className="row mt-1">
            <div className="col-4">
              <div className="input-group mb-3">
                <input
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  value={searchText}
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="col-4">
              <input
                type="number"
                className="form-control"
                placeholder="Row count"
                value={limit}
                onChange={(e) => {
                  setLimit(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <table style={{ width: "70vw" }} className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Movies</th>
                    <th scope="col">Genre</th>
                    <th scope="col">
                      <i
                        onClick={() => {
                          handleRatingA();
                        }}
                        className="fas fa-arrow-up"
                      ></i>
                      Rating
                      <i
                        onClick={() => {
                          handleRatingD();
                        }}
                        className="fas fa-arrow-down"
                      ></i>
                    </th>
                    <th scope="col">
                      <i
                        onClick={() => {
                          handlePopularityA();
                        }}
                        className="fas fa-arrow-up"
                      ></i>
                      Popularity
                      <i
                        onClick={() => {
                          handlePopularityD();
                        }}
                        className="fas fa-arrow-down"
                      ></i>
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {filterArr.map((movieobj, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>
                          <img
                            style={{ height: "4rem", margin: "0px 3px" }}
                            src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`}
                          />
                          {movieobj.original_title}
                        </td>
                        <td>
                          {
                            // movieobj.genre_ids[0]=>refers to generic code.

                            allgenreIds[movieobj.genre_ids[0]]
                          }
                        </td>
                        <td>{movieobj.vote_average}</td>
                        <td>{movieobj.popularity}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleDelete(movieobj.id);
                            }}
                            type="button"
                            className="btn btn-danger"
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row m-5">
            <div className="col-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {pagesArr.map((page, ind) => {
                    return (
                      <li
                        key={ind}
                        onClick={() => {
                          setCurrPage(page);
                        }}
                        className="page-item"
                      >
                        <a className="page-link">{page}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
