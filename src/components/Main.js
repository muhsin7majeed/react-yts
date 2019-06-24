import React, { Component } from "react";
import MovieList from "./MovieList";
import Movie from "./Movie";
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieArray: [],
            movieGenre: [],
            searchQuery: ""
        };
        this.apiKey = process.env.react_app_api;
    }
    render() {
        const handleSubmit = event => {
            event.preventDefault();
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${
                    this.apiKey
                }&query=${this.state.searchQuery}`
            )
                .then(data => data.json())
                .then(data => {
                    this.setState({
                        movieArray: [...data.results]
                    });
                });
        };
        const handleChange = e => {
            e.preventDefault();
            this.setState({
                searchQuery: e.target.value
            });
        };
        return (
            <div>
                <form className="search-form" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="search-bar"
                        onChange={handleChange}
                    />
                    <button className="search-btn">
                        <i class="fas fa-search" />
                    </button>
                </form>
                <div className="movies-container" />
                <MovieList movieArr={this.state.movieArray} />
            </div>
        );
    }
}
