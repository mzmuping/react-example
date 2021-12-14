import logo from './logo.svg';
import './App.css';
import Weather, { Person } from './components/weather'
function App() {
  let props = {
    name: '的看法',
    age: 39,
    height: 185
  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Weather {...props} />
        <Person {...props} />
      </header>
    </div>
  );
}

export default App;
