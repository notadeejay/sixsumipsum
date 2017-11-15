import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = ({
      number: '',
      ipsum:'',
      words: [
        'Turrono',
        'the 6ix',
        'Drake',
        'Parkdale',
        'I never go east of Spadina',
        'I read it in BlogTO',
        'Bar Raval',
        'Leslieville',
        'Queen West',
        'King West',
        'Sorry, gonna be late. The TTC is delayed.',
        'I need to transfer at Bloor',
        'Wanna get brunch?',
        'the vomit comet',
        '905ers',
        'the sufferin Dufferin',
        'the Dufferin mall',
        'I still call it the Skydome.',
        'Scarberia',
        'the T dot',
        'North of Bloor',
        'NOB',
        'YYZ',
        'Don Valley Parking lot',
        'racoons',
        'the white squirrel',
        'Honest Eds',
        'Wanna go to Bellwoods?',
        'the CN tower',
        'the 504',
        'the 501',
        '416',
        'I got it on Bunz',
        'Turrana',
        'That night in Turrono',
        'Kensington Market',
        'I got these sunglasses in Kensington.',
        'true facts',
        'City Place',
        'eye contact on the Subway',
        'Toronto vs. Everybody',
        'Home is Toronto',
        'cold tea',
        'the Brunny',
        'you\'ve changed',
        'the Lakeview',
        'Sorry I can\'t hang out, I\'m in line at BangBang ice cream.',
        'I\'m ritualing my lunch, want anything?',
        'I lost my metro pass',
        'the Junction',
        'we the North',
        'bike lanes on Bloor',
        'Friday Night at the ROM',
        'running through the six',
        'GTA',
        'Jane and Finch',
        'Go Jays Go!',
        'I only go Sam James coffee',
        'the Parkdale No Frills',
        'Let\'s got to Wonderland!',
        'Should we TTC?',
        'Let\'s go to the Drake',
        'Rob Ford',
        'the CNE',
        'the Village',
        'Hooker Harveys',
        'Yonge & Eg',
        'Roncy',
        'the Maddie',
        'Timmie\'s',
        'Hogtown',
        'the 6ix dad',
        'King Slice',
        'I work on Bay street',
        'Lost in the PATH',
        'Earl\'s patio',
        'Let\'s hit a patio',
        'Grab a roadie for the streetcar',
        'Nachos at Sneaky Dee\'s',
        'I\'m up North this weekend',
        'Stuck on the Allen',
        'Casa Loma',
        'Two seasons: construction and winter',
        'the Fringe Festival',
        'We should go see so many movies at TIFF',
        'the Spadina bus',
        'Let\'s go to the Island this weekend',
        'the CNE airshow',
        'Gerrard Square',
        'Taste of the Danforth',
        'Dundas West Fest',
        'Taste of Little Italy',
        'This is their year',
        'Burrito Boyz',
        'You know filmed that outside my office.',
        'Street meat',
        'BELIEVE!',
        'peameal bacon sandwiches',
        'NOBODY',
        'Oliver\'s jewellery',
        'Bathurst Station Jamaican patties',
        'patio season',
        'the flyer at the CNE',
        'Degrassi High',
        'I live in Toronto West',
        'the shoe',
        'I need change for the TTC',
        'the Distillery District',
        'Little Italy',
        'Little Portugal',
        'Sushi on Bloor',
        'the Annex',
        'Croc Rock',
        'Spoke Club',
        'Central Tech',
        'Maple Leaf Gardens',
        'The Loblaws formally known as Maple Leaf Gardens',
        'ACC',
        'Dance Cave',
        'Scarborough Bluffs',
        'Smoke\'s poutine',
        'Bat flip',
        'ISO',
        'tokens',
        'The Big Smoke',
        'Ossington',
        'I live in the West end',
        'Ride the Rocket',
        'It\'s so cold out today',
        'CP24',
        '299 Bloor',
        '6 degrees of Degrassi seperation.',
        'Cherry Blossoms at High Park',
        'Avoiding the Christmas Market at all costs.',
        'Suits',
        'Cinnabun at Eglinton Station',
        'Leslie Spit',
        'pug grumbles',
        'the dog bowl',
        'Speakers corner',
        'MuchMusic veejay',
        'Electric Circus',
        'CP24 car',
        'Attention all passengers on Line 1.',
        'RC Harris Water Treatment Plant',
        'The pronunciation of Spadina.',
        'Strachan',
        '647',
        'Gale\'s Snackbar',
        'Ed\'s Real Scoop',
      ]
    })

    this.randomParagraph = this.randomParagraph.bind(this)
    this.randomQuote = this.randomQuote.bind(this)
    this.buildParagraph = this.buildParagraph.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  randomQuote = () => this.state.words[Math.floor(Math.random() * this.state.words.length)]
  
  randomParagraph = () => {
    let num = Math.floor(Math.random() * (6 - 3 + 1) + 3),
    words = ''
  
    for (var i = 0; i < num; i++) {
       words += (this.randomQuote() + ' ') 
    }
  
    return words;
  }

  buildParagraph = () => {
    let ipsum = [];
  
    while ( ipsum.length < 5 ) { 
      ipsum.push(this.randomParagraph()); 
    }
      this.setState ({
        ipsum: `<p> ${ipsum} </p>`,
      })
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.buildParagraph(event.target.value)
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
        <label>
          How many paragraphs:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <p>{this.state.ipsum}</p>
      </div>
    );
  }
}

export default App;
