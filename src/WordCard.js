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
                    <p><img width = "300" height = "300" src = "https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/51866008_1904750672984051_8109730310272319488_n.jpg?_nc_cat=111&_nc_oc=AQl8SRrtukl4RosZ1d1YkCvcYZC4sTO-PK86NdXFpTKRfPoERan7ku37M5oUH66u1Mw&_nc_ht=scontent.fbkk8-3.fna&oh=60f16d280c98d7d10af3cea194b87d4a&oe=5E3C0F8A"></img></p>
                    <p><h1>{this.state.completed? "Answer is : "+this.state.word: ""}</h1></p>
                    <p><h1>{this.state.completed? "You Corrrect!": ""}</h1></p>
                    <p><h1>{this.state.completed? <button onClick={this.refreshPage}>Play Again</button>: ""}</h1></p>
                    <p><h1>{this.state.completed? "นายวิชนม์ พีร์ อินสว่าง 6010110330 sec 01": ""}</h1></p>
                    
                    
                </div>
         );
    }
   
}
