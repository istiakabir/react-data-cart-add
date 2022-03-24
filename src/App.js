import logo from './logo.svg';
import './App.css';
import {divided, multiplication } from './Utilities/Multyply';
import Cosmetic from './Component/Cosmetic/Cosmetic';
import Cosmetics from './Component/Cosmetics/Cosmetics';

// import {divided} from './Utilities/Multyply'

function App() {
  const first = 25;
  const second = 5;
  let total = multiplication(first, second);
  let divide = divided(first, second);

  return (
    <div className="App">
      <h4>Multiplication: {total}</h4>
      <h4>Divided: {divide}</h4>
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
