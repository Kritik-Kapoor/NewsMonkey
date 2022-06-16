import React, { Component, useState } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <Img src={imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unkown" : author} at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const Img = ({ src = "" }) => {
  const [errored, setErrored] = useState(false);
  return (
    <img
      src={!errored ? src : "/news random.jpg"}
      className="card-img-top"
      alt=""
      onError={() => setErrored(true)}
    />
  );
};

export default NewsItem;
