import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Button from './components/Counter/Button';

const texts = ['Button1+ 10', 'Button2+ 10', 'Button3+ 10'];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const decarts = () => setCount(count + 10);

  return (
    <div className="App">
      <Counter count={count} />
      <Button text="Click me +" onClick={incrementCount} />
      <Button text="Click me -" onClick={decrementCount} />
      {texts.map(text => {
        return (
          <div className="div" key={text}>
            <Button onClick={decarts} text={text} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
