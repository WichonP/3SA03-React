import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class Wordcard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{    
            let chars = _.shuffle(Array.from(this.state.word))
            this.setState({guess: [], chars:chars, attempt: this.state.attempt + 1})
            }
        }
}
refreshPage(){
    window.location.reload();
}

        render() {
            return (
                <div className="App">
                    <p>Attempt : {this.state.attempt}</p>
                        {Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} attempt = {this.state.attempt} activationHandler={this.activationHandler}/>)}
                    <p>{this.state.completed? "Answer is : "+this.state.word: ""}</p>
                    <p>{this.state.completed? "You Corrrect!": ""}</p>
                    <p>{this.state.completed? <button onClick={this.refreshPage}>Play Again</button>: ""}</p>
                    
                    
                </div>
         );
    }
   
}
