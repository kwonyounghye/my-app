import logo from './logo.svg';
import './App.css';

function App() {
  let isrc = 'https://ik.imagekit.io/ikmedia/backlit.jpg';
  return (
    <div className="App">
      <header className="App-header">

        <img src={isrc} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          style={{borderRadius:"50%"}}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트
        </a>
      </header>
    </div>
  );
}

export default App;
