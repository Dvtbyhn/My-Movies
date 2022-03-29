import React from "react";
import MovieList from "./components/MovieList";
import axios from 'axios'
import SearchBar from "./components/SearchBar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";

class App extends React.Component {


  state = {
    movies: [],
    search: ""
  }


  componentDidMount() {
    this.getMovies()
  }

  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies")
    this.setState({ movies: response.data })
  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`)
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )

    this.setState(state => ({
      movies: newMovieList
    }))
  }


  searchMovie = (e) => {
    this.setState({ search: e.target.value })
  }


  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie)
    this.setState(state => ({
      movies: state.movies.concat([movie])
    }))
    this.getMovies()
  }


  editMovie = async (movie) => {
    await axios.put(`http://localhost:3002/movies/`,movie)
       this.getMovies()
  }



  render() {

    let newFilteredMovie = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
    })
    return (
      <Router>
        <div className="container-lg">
          <Switch>

            <Route path ="/" exact render={() => (
              <React.Fragment>
                <SearchBar searchMovieProp={this.searchMovie} />
                <MovieList
                  movies={newFilteredMovie}
                  deleteMovieProp={this.deleteMovie}
                />
              </React.Fragment>

            )}>

            </Route>
            <Route path ="/add" render={({ history }) => (
              <AddMovie
                onAddMovie={(movie) => {
                  this.addMovie(movie)
                  history.push("/")
                }}
              />
            )}>

            </Route>

            <Route path="/edit/:id" render = {(props) => (
              <EditMovie 
              {...props}
              onEditMovie={(id,movie) => {
                this.editMovie(id,movie)
              }} />
            )}>

            </Route>

          </Switch>


        </div>
      </Router>

    )
  }

}



export default App;
