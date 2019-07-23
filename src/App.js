import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Character from './Character/Character';
import './Character/Character.css'

class App extends Component {
  state = {
    length: 0,
    content: null
  }

  inputChangedHandler = (event) => {
    let length = event.target.value.length
    this.setState({ length: length, content: event.target.value })
  }

  characterClickedHandler = (event) => {
    //TODO delete the clicked letter from the Character components, and from the content of the input box
  }

  render() {
    let characters = null;
    let content = null;
    if (this.state.length > 0) {
      content = this.state.content.split('')

      characters = (
        <div>
          {content.map((letter, index) => {
            return <Character
              click={() => this.characterClickedHandler(index)}
              className="Character"
              letter={letter}
              key={index}
            />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputChangedHandler(event)}></input>
        {this.state.length > 0 &&
          <p>Input Length: {this.state.length}</p>
        }
        <Validation length={this.state.length} />
        {characters}
      </div>
    );
  }
}

export default App;
