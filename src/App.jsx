import { useState } from 'react';

import Salary from './components/Salary';

import './App.css';

const data = [
  { value: 'miami', label: 'Miami' },
  { value: 'roma', label: 'Roma' },
  { value: 'paris', label: 'Paris' },
  { value: 'madrid', label: 'Madrid' },
  { value: 'londres', label: 'Londres' },
]

function Component(props) {
  console.log('Me renderizo');

  return (
    <div>
      <h1>Hola Component {props.count}</h1>
    </div>
  )
}

function Counter({ fnParaActualizarMisHermanos }) {
  const [count, setCount] = useState(1);

  const handleCountChange = () => {
    setCount(count + 1);
  }

  const handleCountChangeReduce = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Contador esta en {count}</h1>
      <button onClick={handleCountChange}>+1</button>
      <button onClick={handleCountChangeReduce}>-1</button>
    </div>
  )
}



function App() {
  const [destiny, setDestiny] = useState('roma');

  const handleDestinyChange = (e) => {
    if (e.target.value) {
      setDestiny(e.target.value);
    }
  }

  return (
    <div className="App">
     {/* <Clock /> */}
     <Salary />

    </div>
  );
}

export default App;
