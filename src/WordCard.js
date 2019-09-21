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
                    <h1>Attempt : {this.state.attempt}</h1>
                        {Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} attempt = {this.state.attempt} activationHandler={this.activationHandler}/>)}
                    <p><h1>{this.state.completed? "Answer is : "+this.state.word: ""}</h1></p>
                    <p><h1>{this.state.completed? "You Corrrect!": ""}</h1></p>
                    <p><h1>{this.state.completed? <button onClick={this.refreshPage}>Play Again</button>: ""}</h1></p>
                    <p><h1>{this.state.completed? "นายวิชนม์ พีร์ อินสว่าง 6010110330 sec 01": ""}</h1></p>
                    
                    
                </div>
         );
    }
   
}
