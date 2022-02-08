import logo from './Logo.png';
import './App.css';
import Nav from './components/Nav.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
        <p>
         Ian is a fantastic tutor.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Javascript first
        </a>
      </header>
    </div>
  );
}

export default App;
