import './App.css';
import Home from './Home';
import Search from './Search'

function App() {
  return (
    <div className="App">
      <Home title="React Hooks"/>
      <hr className="breakepointline"/>
      <Search title="Using useState"/>
    </div>
  );
}

export default App;
