import './App.css';
import CenteredCard from "./components/CenteredCard/CenteredCard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card__children">
          <CenteredCard children="Children 1" />
          <CenteredCard children="Children 2" />
          <CenteredCard children="Children 3" />
        </div>
      </header>
    </div>
  );
}

export default App;
