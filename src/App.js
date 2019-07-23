import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Character from './Character/Character';
import './Character/Character.css'

class App extends Component {
  state = {
    length: 0,
    content: ''
  }

  inputChangedHandler = (event) => {
    let length = event.target.value.length
    this.setState({length: length, content: event.target.value})
  }

  characterClickedHandler = (index) => {
    let currentText = this.state.content

    let characters = currentText.split('')
    console.log(characters)
    let newText = (characters.slice(0,index)).join('')
    newText += (characters.slice(index + 1, currentText.len)).join('')
    console.log(newText)
    this.setState({content: newText})
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
        <p>Enter some text below:</p>
        <input type="text" value={this.state.content} onChange={(event) => this.inputChangedHandler(event)}></input>
        {this.state.length > 0 &&
          <Validation length={this.state.length} />
        }
        {characters}
      </div>
    );
  }
}

export default App;
