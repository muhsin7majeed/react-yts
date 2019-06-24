import React from "react";
import Movie from "./Movie";
import "./css/Movies.css";
export default function MovieList(props) {
    return (
        <div>
            <div className="movie-container">
                {props.movieArr.map((movie, i) => {
                    return <Movie key={i} movie={movie} />;
                })}
            </div>
        </div>
    );
}
{
    /* ; */
}
