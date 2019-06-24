import React from "react";
import "./css/Movies.css";
export default function Movie(props) {
    return (
        <div>
            <div className="movie-card">
                <div>
                    {props.movie.poster_path == null ? (
                        <img
                            className="movie-poster"
                            src="https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"
                        />
                    ) : (
                        <img
                            className="movie-poster"
                            src={`https://image.tmdb.org/t/p/w185/${
                                props.movie.poster_path
                            }`}
                            alt=" "
                        />
                    )}

                    <h1 className="movie-name">{props.movie.title}</h1>
                    <p className="movie-date">
                        Released on :{props.movie.release_date}
                    </p>
                    <p className="movie-disc">{props.movie.overview}</p>
                    {console.log(props.movie.poster_path)}
                </div>
                <div />
            </div>
        </div>
    );
}
