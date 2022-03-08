import logo from './logo.svg';
import './App.css';

import Card from './components/Card';

const characters = Array.from({ length: 5 }, (_, i) => (i));

function App() {
  return (
    <div className="App">
      <div className="showcase">
        {
          characters.map((character, idx) => (<Card key={idx} />))
        }
      </div>
    </div>
  );
}

export default App;
