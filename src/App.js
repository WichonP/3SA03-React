import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';



class App extends Component {
    render() {
        return ( 
            <div className="App">
               
                  <WordCard value="Happy"/>
               
            </div>
        );
    }
}
export default App;