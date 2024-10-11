import React, { useState } from 'react';
import "./Container.css"

const API_key = "a89b2a2225b9c2590d9d3de4f9596d31";
const base_url = "https://api.themoviedb.org/3/";
const base_img = "https://image.tmdb.org/t/p/w500/";
const search_movies = "https://api.themoviedb.org/3/search/movie";

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async () => {
        try {
            const response = await fetch(`${search_movies}?api_key=${API_key}&query=${query}`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <section>
            <div className=" d-flex justify-content-center align-items-center " >

                    <input className="form-control tm-search-input m-1 d-flex  w-75"
                           type="text"
                           placeholder="Search for movies"
                           value={query}
                           onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-success tm-search-btn m-1 align-items-center"  onClick={searchMovies}>
                        <i className="fas fa-search"></i>
                    </button>
            </div>



            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                <div className="card">

                {movies.map(movie => (
                    <div  key={movie.id} className="card-body">

                        <h5 className="card-title">{movie.title}</h5>

                        <img className="card-img-top" src={`${base_img}${movie.poster_path}`} alt={movie.title} />
                        <p className="card-text">{movie.overview}</p>

                    </div>
                ))}

                </div>

                </div>

        </div>
            </div>
            </section>
        </div>

    );
};

export default MovieSearch;
