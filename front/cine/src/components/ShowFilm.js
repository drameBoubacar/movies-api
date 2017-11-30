import React, { Component } from 'react';


class ShowFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3005/cine')
      .then(res => res.json())
      .then(body => {
        this.setState({
          movie: body
        })
        console.log(this.state.movie);
      })
      .catch(err => { throw err })
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-left">
            <div>
              {this.state.movie.map(movie => {
                return <ul>
                  <li>titre : {movie.title}</li>
                  <li>Année : {movie.year}</li>
                  <li>Acteurs : {movie.actors}</li>
                  <li>Genre : {movie.kind}</li>
                  <img src={`${movie.img}`} alt="" />
                  <a href={`http://localhost:3005/cine/delete/${movie._id}`}>
                    <button type="submit">Delete</button>
                  </a>
                  <a href={`http://localhost:3005/cine/edit/${movie._id}`}>
                    <button type="submit">Edit</button>
                  </a>
                </ul>
              }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFilm;