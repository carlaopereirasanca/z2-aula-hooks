
import { useReducer } from 'react';
import './App.css';
import Titulo from './componentes/Titulo';

const initialState = { count: 0, name: '' };

function reducer(state, action) {

  switch (action.type) {

      case 'increment':
      return { ...state, count: state.count + 1 };

      case 'decrement':
      return { ...state, count: state.count - 1 };

      case 'reset':
      return { ...state, count: 0 };

      case 'setName':
      return { ...state, name: action.payload };

      default:
      console.log("Deu pau!!");
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    
    <div className="App">

      <Titulo />
      

    </div>
  );
}

export default App;

