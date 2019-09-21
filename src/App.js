import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';

var vocab = ["Happy","Lonely","Cute"]
let randomIndex = parseInt(Math.random() * 3)


class App extends Component {
    render() {
        return ( 
            <div className="App">
               
                  <WordCard value={vocab[randomIndex]}/>
               
            </div>
        );
    }
}
export default App;