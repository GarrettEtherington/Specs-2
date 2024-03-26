import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MovieScreen from './components/MovieScreen'

function App() {
  const [list, setList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)

  
const getData = () => {
  axios
     .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
     .then((res) => {
           console.log(res.data.results)
           setMovieList(res.data.results)
     })
}

useEffect(() => {
  getData()
}, [page])




  return (
    <>
      <div className="App">
          <Header/>
          <main>
            <MovieScreen
            movieList={movieList}
            page={page}
            setPage={setPage}
            list={list}
            />
          </main>
      </div>
    </>
  )
}

export default App
