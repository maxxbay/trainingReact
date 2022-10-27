import './App.css';
import RandomNumber from './components/Numbers/Numbers';
import SecondRandomNumber from './components/Numbers/SecondNumbers';

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={1000} />
      <SecondRandomNumber maxNum={100000} />
    </div>
  );
}

export default App;
