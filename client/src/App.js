import './App.css';

import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <div className="">
        <h2>Redux Toolkit Implementation</h2>
      </div>
      <div className="">
        <Counter />
      </div>
    </div>
  );
}

export default App;
