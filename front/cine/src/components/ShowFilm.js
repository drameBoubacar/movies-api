import React, { Component } from 'react';


class ShowFilm extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie : []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3005/cine')
        .then(res => res.json())
        .then(body =>{
          this.setState({
              movie : body
          })
        })
        .catch(err => {throw err})
      }
    render() {
               
      return (
        <div>
              {this.state.movie.map(movie => {
                return <ul>
                          <li>titre : {movie.title}</li>
                          <li>Année : {movie.year}</li>
                          <li>Acteurs : {movie.actors}</li>
                          <li>Genre : {movie.kind}</li>
                         <img src={`${movie.img}`} alt=""/>
                       </ul>
                      
              }
            )}  
        </div>
      );
    }
  }

  export default ShowFilm;