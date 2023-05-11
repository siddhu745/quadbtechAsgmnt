import "../css/card.css";
import { Link } from "react-router-dom";

export default function Card({ value }) {



  if (!value || !value.show || !value.show.image || !value.show.image.medium) {
    return <></>;
  }

  return (
    <div className="card-container">

      <div className="card">
        <img className="image" src={value.show.image.medium} alt="movie" />
        <div className="info">
          <div>
            <p style={{ margin: "0px" }}>{value.show.name}</p>
            <br />
            {value.show.language} | {value.show.genres[0]}
            <br />
            Average Rating: {value.show.rating.average}
          </div>
          <Link className="link" to={`/show/${value.show.name}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
