import React, { useState } from "react";

const Search = ({ srcTvShowInfo }) => {
  //usar State

  const [tvShow, setTvShow] = useState({
    nameTvShow: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(`http://api.tvmaze.com/singlesearch/shows?q=${tvShow.nameTvShow}`)
      .then((res) => res.json())
      .then((data) => {
        //pasar la busqueda a tvshow
        srcTvShowInfo(data);
        // actualizar formulario
        setTvShow({ nameTvShow: "" });
      });
  };

  const changeHandler = (e) => {
    setTvShow({ ...tvShow, nameTvShow: e.target.value });
  };

  //estraer los valores del estate

  const { nameTvShow } = tvShow;

  return (
    <section
      className="search"
      style={{ background: "#19beda", padding: "80px" }}
    >
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form onSubmit={submitHandler} className="card card-sm">
              <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search h5 text-body" />
                </div>
                {/*end of col*/}
                <div className="col">
                  <input
                    onChange={changeHandler}
                    className="form-control form-control-lg form-control-borderless"
                    type="search"
                    placeholder="Search TV Show"
                    value={nameTvShow}
                  />
                </div>
                {/*end of col*/}
                <div className="col-auto">
                  <button className="btn btn-lg btn-success" type="submit">
                    Search
                  </button>
                </div>
                {/*end of col*/}
              </div>
            </form>
          </div>
          {/*end of col*/}
        </div>
      </div>
    </section>
  );
};

export default Search;
