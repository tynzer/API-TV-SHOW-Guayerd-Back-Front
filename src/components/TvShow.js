import React, { useState, useEffect } from "react";

function TvShow({ sendTvShowInfo }) {
  const [isSerched, setIsSerached] = useState(false);

  useEffect(() => {
    if (sendTvShowInfo !== "") {
      sendTvShowInfo.summary = sendTvShowInfo.summary.replace(/<[^>]+>/g, ""); //elimina los tag de html
      setIsSerached(sendTvShowInfo);
    }
  }, [sendTvShowInfo]);

  if (isSerched) {
    return (
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={sendTvShowInfo.image.medium}
            className="card-img"
            alt="..."
            style={{ maxWidth: "65%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{sendTvShowInfo.name.toUpperCase()}</h5>
            <p className="card-text"> {sendTvShowInfo.summary}</p>
            <p className="card-text">
              <small className="text-muted">{sendTvShowInfo.language}</small>
            </p>
            <a
              href={sendTvShowInfo.officialSite}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Oficial Site
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <h2 className="mt-4" style={{ textAlign: "center" }}>
      Search a TV show
    </h2>
  );
}

export default TvShow;
