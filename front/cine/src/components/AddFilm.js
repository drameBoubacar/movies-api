import React, { Component } from 'react';

class AddFilm extends Component {
    render() {
      return (
        <div>
        <form method="POST" action="http://localhost:3005/cine/add" encType="multipart/form-data">
            <input type="file" name="pictures"/>
            <input type="text" name="title" placeholder="enter title"/>
            <input type="text" name="year" placeholder="enter year"/>
            <input type="text" name="actors" placeholder="enter actors"/>
            <input type="text" name="kind" placehoder="enter kind"/>
            <button type="submit">Add</button>
        </form>
        </div>
      );
    }
  }

  export default AddFilm;