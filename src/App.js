import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Joke from './components/Joke';

function App() {
  return (
    <div className="container">
      <Header/>
      <Joke/>
    </div>
  );
}

export default App;
