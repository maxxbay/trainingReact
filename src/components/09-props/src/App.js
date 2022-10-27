import './App.css';
import PetInfo from './components/PetInfo/petinfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="elephant" age="36" hasPet />
      <PetInfo animal="cat" age="3" hasPet={false} />
    </div>
  );
}

export default App;
