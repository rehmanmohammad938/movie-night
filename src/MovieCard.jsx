import React from "react";

export default function MovieCard ({ movie, onToggle }) {
    const watchedText = movie.watched ? "Watched" : "Not Watched Yet";
    const buttonLabel = movie.watched ? "Mark as Unwatched" : "Mark as watched"; 

    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.genre}; {movie.year}</p>
            <p>{watchedText}</p>
            <button onClick={() => onToggle(movie.id)}>
            {buttonLabel}
            </button>
        </div>
    );
}

