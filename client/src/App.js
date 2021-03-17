import fetchData from './api/index';
import React, {Component} from 'react';
import { render } from 'react-dom';


function makeCard(element){
  return(
    <div>
          <p>Album tite: {element.title}</p>
          <p>Album artist: {element.artist}</p>
          <p>Album genre: {element.genre}</p>
          <img src = {element.img} ></img>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount(){
    let albums = fetchData().then((result) => {
      this.setState({
        albums: result.data
      })
    });

  }
  //console.log(array);

  render() {
    //console.log(this.state.albums);
    let array = this.state.albums.map(makeCard)

    return (
      <div className="App">
        <header className="App-header">
          <p className="text-blue-700">
            Hello in blue text
          </p>
          {array}
        </header>
      </div>
    );
  }

}

export default App;
