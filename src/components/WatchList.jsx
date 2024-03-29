import React from "react"
import MovieCard from "./MovieCard"

const WatchList = ({ list, removeMovie }) => {

    const movieDisplay = list.map((movie, index) => {
        return (
            <MovieCard movie={movie} removeMovie={removeMovie} list={list}/>
        )    
    })

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default WatchList

// ASK HOW TO TELL WHICH PROPS GO WHERE
// STEP 3 PART 4 "Inside of Watchlist.jsx, destructure your props"