import './App.css';
import CenteredCard from "./components/CenteredCard/CenteredCard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card__children">
          <CenteredCard>Children 1</CenteredCard>
          <CenteredCard>Children 2</CenteredCard>
          <CenteredCard>Children 3</CenteredCard>
        </div>
      </header>
    </div>
  );
}

export default App;
