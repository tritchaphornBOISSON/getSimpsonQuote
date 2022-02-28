import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import QuoteCard from './components/QuoteCard';

const sampleQuote = {
  quote:
    "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
  character: 'Lisa Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
  characterDirection: 'Right',
}

function App() {

  const [quoteList, setQuoteList] = useState(sampleQuote);

  const getQuoteList = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0]);
        setQuoteList(data[0]);
      });
  };
  return (
    <div className="App">
      <QuoteCard quoteList={quoteList} />
      <button type="button" onClick={getQuoteList}>Get Simpsons Quote</button>
    </div>
  );
}

export default App;
