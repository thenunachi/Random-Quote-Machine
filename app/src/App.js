
import './App.css';
import rajiniQuotes from './quotes'
import { useState, useEffect } from 'react'
import leftQuote from './quote-left.png'
import rightQuote from './right.png'
import twitter from './twitter.png'
import tumblr from './tumblr.png'

const App = () => {
  const [quotes, setQuotes] = useState("மலை டா… அண்ணாமலை.")
  const [randomNumber, setRandomNumber] = useState(0)
  const colors = ["red", "blue", "green", "purple", "orange"];
  const [color, setColor] = useState("black");
  useEffect(() => {

  }, [quotes])


  const handleClick = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * rajiniQuotes.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    setQuotes(rajiniQuotes[randomIndex]);
  }



  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color}}>
        <div id="quote-box" style={{ color: color }} rows={4} cols={40} >

          <p id="text">
            <img className="img" src={leftQuote} />
            {quotes}
            <img className="img" src={rightQuote} />
          </p>
          <p id="author">- LavaGirl

          </p>
          <span className='links'>
            <button id="new-quote" style={{ backgroundColor: color, border:color}}className="btn btn-primary" onClick={(e) => handleClick(e)}>new-Quote</button>
            <div className='socialLinks' >
              <a href="https://twitter.com/intent/tweet" target="_blank" style={{ color: color }} id="tweet-quote"> <img className="img" src={twitter} /></a>
              <a href="https://tumblr.com/" target="_blank" style={{ color: color }} id="tumblr"> <img className="img" src={tumblr} /></a>
            </div>
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
