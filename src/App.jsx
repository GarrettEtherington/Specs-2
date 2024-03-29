import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MovieScreen from './components/MovieScreen'
import WatchList from './components/WatchList'
import axios from 'axios'

function App() {
  const [list, setList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)

const addMovie = (movie) => setList([...list, movie])

const removeMovie = (movie) => {
  const newState = list.filter((mov) => {
    return mov !== movie
  })
  setList(newState)
}

const getData = () => {
  axios
     .get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=${page}`)
     .then((res) => {
           console.log(res.data.results)
           setMovieList(res.data.results)
     })
}

useEffect(() => {
  getData()
}, [page])




  return (
      <div className="App">
          <Header/>
          <main>
            <MovieScreen
            addMovie={addMovie}
            movieList={movieList}
            page={page}
            setPage={setPage}
            list={list}
            removeMovie={removeMovie}
            />
            <WatchList list={list} removeMovie={removeMovie}/>
          </main>
      </div>
  )
}

export default App
