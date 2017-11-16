import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = ({
      value: 1,
      ipsum: [],
      words: [
        'turrono',
        'the 6ix',
        'drake',
        'parkdale',
        'east of Spadina',
        'blogTO',
        'bar raval',
        'leslieville',
        'queen west',
        'king west',
        'TTC delays',
        'transfer at bloor',
        'brunch',
        'the vomit comet',
        '905ers',
        'sufferin dufferin',
        'the dufferin mall',
        'I still call it the Skydome',
        'scarberia',
        't-dot',
        'north of bloor',
        'NOB',
        'YYZ',
        'don valley parking lot',
        'racoons',
        'white squirrel',
        'honest eds',
        'bellwoods brewery',
        'CN tower',
        'the 504',
        'the 501',
        '416',
        'got it on bunz',
        'turrana',
        'that night in turrono',
        'kensington market',
        'sunglasses in kensington',
        'city place',
        'subway eye contact',
        'toronto vs. everybody',
        'home is toronto',
        'cold tea',
        'brunny',
        'you\'ve changed',
        '3 AM at the lakeview',
        'lineup at BangBang ice cream',
        'ritual',
        'shopify',
        'stolen bikes',
        'lost metro pass',
        'the junction',
        'we the north',
        'bike lanes on bloor',
        'friday night at the ROM',
        'running through the six',
        'GTA',
        'jane and finch',
        'go jays go',
        'sam james',
        'parkdale no frills',
        'wonderland',
        'should we TTC',
        'rob ford',
        'the CNE',
        'the village',
        'hooker harveys',
        'yonge and eg',
        'roncy',
        'the maddie',
        'timmie\'s',
        'hogtown',
        'the 6ix dad',
        'king slice',
        'bay street',
        'PATH',
        'earl\'s patio',
        'streetcar roadies',
        'sneaky dee\'s nachos',
        'stuck on the allen',
        'casa loma',
        'fringe festival',
        'tiff',
        'spadina bus',
        'toronto island',
        'CNE airshow',
        'gerrard aquare',
        'taste of the danforth',
        'dundas west fest',
        'taste of little italy',
        'burrito boyz',
        'street meat',
        'BELIEVE',
        'peameal bacon sandwiches',
        'NOOOOBODY',
        'oliver\'s jewellery',
        'bathurst station jamaican patties',
        'patio season',
        'the flyer at the CNE',
        'degrassi high',
        'the shoe',
        'I need change for the TTC',
        'distillery district',
        'little italy',
        'little portugal',
        'sushi on bloor',
        'the annex',
        'croc rock',
        'spoke club',
        'central tech',
        'maple leaf gardens',
        'ACC',
        'dance cave',
        'scarborough bluffs',
        'smoke\'s poutine',
        'bat flip',
        'ISO',
        'tokens',
        'the big smoke',
        'ossington',
        'west end',
        'ride the rocket',
        'it\'s so cold out today',
        'CP24',
        '299 Bloor',
        '6 degrees of Degrassi seperation.',
        'cherry blossoms at high park',
        'avoiding the christmas market at all costs',
        'suits',
        'eglinton station cinnabun',
        'leslie spit',
        'pug grumbles',
        'the dog bowl',
        'speakers corner',
        'muchmusic veejay',
        'electric circus',
        'CP24 car',
        'attention all passengers on line 1',
        'RC harris water treatment plant',
        'pronunciation of spadina',
        'strachan',
        '647',
        'gale\'s snackbar',
        'ed\'s real scoop',
        'peter parkour',
        'zanta',
        'batman bonnie',
        'fare inspectors',
        'skyline',
        'beef patties',
        'the phoenix',
        'sound academy',
        'bloorcourt',
        'first thursdays',
        'riverdale farm',
        'riverdale park',
        'mystic muffin',
        'beltline trail',
        'NOW magazine',
        'garrison creek melting smell',
        'toronto public library',
        'ed the sock',

      ]
    })

    this.randomParagraph = this.randomParagraph.bind(this)
    this.randomQuote = this.randomQuote.bind(this)
    this.buildParagraph = this.buildParagraph.bind(this)
    this.handleChange = this.handleChange.bind(this);
   
  }
  
  componentDidMount() {
    this.buildParagraph(this.state.value)
  }

  randomQuote = () => this.state.words[Math.floor(Math.random() * this.state.words.length)]
  
  randomParagraph = () => {
    let num = Math.floor(Math.random() * (25 - 5 + 1) + 25),
    words = ''
  
    for (var i = 0; i < num; i++) {
       words += (this.randomQuote() + ' ') 
    }
    return words
  }

  buildParagraph = (num) => {
    let ipsum = [];
    
    while ( ipsum.length < num ) { 
      ipsum.push(`<p> ${this.randomParagraph()} </p>`); 
    }
      this.setState({
        ipsum: ipsum,
      })
      console.log(this.state.ipsum)
    }

    handleChange(event) {
      this.buildParagraph(event.target.value)
    }
  


  render() {
    return (
      <div className="App">

        <div className="left-bar">
          <h1 className="App-title">Sixum Ipsum</h1>
        </div>

        <div className ="right-bar">
       <p className="generate">GENERATE</p>
        <h2>
           Key (words) To the City 
        </h2>
        <span className="divider"></span>
        <div className="select-style">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='1'>1 PARAGRAPH</option>
            <option value='2'>2 PARAGRAPHS</option>
            <option value='3'>3 PARAGRAPHS</option>
            <option value='4'>4 PARAGRAPHS</option>
          </select>
        </div>
      <div className="paragraphs">
    
      {this.state.ipsum.map((pg) => {
      return <p className="ipsum">{pg}</p>
        })
      }
      </div>
      </div>

      </div>
    );
  }
}

export default App;
