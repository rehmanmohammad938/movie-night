import React from "react";

export default function MovieCard ({ movie }) {
    const watchedText = movie.watched ? "Watched" : "Not Watched Yet";
    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.genre}; {movie.year}</p>
            <p>{watchedText}</p>
        </div>
    );
}

