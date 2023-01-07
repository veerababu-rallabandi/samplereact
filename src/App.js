import './App.css';
import React, { useReducer } from 'react';
import Inline from './Basics/Inline';
import './Components/appStyle.css'
import Styles from './Components/appStyle.module.css'
import Form from './Basics/Form';
import LifecycleA from './Basics/LifecycleA';
import FramgementDemo from './Basics/FramgementDemo';
import Table from './Basics/Table';


export const UserContext = React.createContext() //step 1: create context
export const admincontext = React.createContext()

export const CounterContext = React.createContext()

const initialvaluue = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialvaluue
    default:
      return state
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialvaluue)
  return (
    <div className='App'>
      <Table/>
    </div>
  );
}

export default App;
