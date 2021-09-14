import React from "react";
 const Newsitems=(props)=> {

    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span class="badge rounded-pill bg-danger" style={{ width: "40%" }}>
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.mos.cms.futurecdn.net/PmKRoZNUHNAZN8BwoSW9sQ.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreffrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitems;
