import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = ({
      number: '',
      ipsum:'',
      words: [
        'turrono',
        'In the 6ix.',
        'Drake',
        'Parkdale',
        'I never go east of Spadina.',
        'I read it in BlogTO.',
        'Bar Raval',
        'Leslieville',
        'Queen West',
        'King West',
        'Sorry, gonna be late. The TTC is delayed.',
        'I need to transfer at Bloor.',
        'Wanna get brunch?',
        'Riding the vomit comet.',
        '905ers',
        'The sufferin Dufferin',
        'The Dufferin Mall',
        'I still call it the Skydome.',
        'Scarberia',
        'The T Dot',
        'North of Bloor',
        'NOB',
        'YYZ',
        'Don Valley Parking lot',
        'Racoons',
        'The white squirrel',
        'Honest Eds',
        'Wanna go to Bellwoods?',
        'The CN tower',
        'The 504',
        'The 501',
        '416',
        'Thanks! I got it on Bunz.',
        'Turrana',
        'That night in Turrono.',
        'Kensington Market',
        'I got these sunglasses in Kensington.',
        'I live in City Place.',
        'Avoiding eye contact on the Subway.',
        'Toronto vs. Everybody',
        'Home is Toronto.',
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
        'NOOOOBODY',
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
        'Peter Parkour',
        'Zanta'
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

  buildParagraph = (num) => {
    let ipsum = [];
    console.log(num)
    while ( ipsum.length < num ) { 
      ipsum.push(this.randomParagraph()); 
      ipsum[0].charAt(0).toUpperCase()
     
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
      console.log(this.state.value)
      this.buildParagraph(this.state.value)
    }


  render() {
    return (
      <div className="App">

        <div className="left-bar">
          <h1 className="App-title">Hello</h1>
        </div>

        <div className ="right-bar">
        <form className="paragraph-form" onSubmit={this.handleSubmit}>
        <p>
          How many paragraphs:
        </p>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='1'>1 PARAGRAPH</option>
            <option value='2'>2 PARAGRAPHS</option>
            <option value='3'>3 PARAGRAPHS</option>
            <option value='4'>4 PARAGRAPHS</option>
          </select>
        <input type="submit" value="Submit" />
      </form>
        <p className="ipsum">{this.state.ipsum}</p>
      </div>

      </div>
    );
  }
}

export default App;
