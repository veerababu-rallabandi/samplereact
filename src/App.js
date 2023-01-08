import './App.css';
import React, { useReducer } from 'react';
import Inline from './Basics/Inline';
import './Components/appStyle.css'
import Styles from './Components/appStyle.module.css'
import Form from './Basics/Form';
import LifecycleA from './Basics/LifecycleA';
import FramgementDemo from './Basics/FramgementDemo';
import Table from './Basics/Table';
import PureComp from './Basics/PureComp';
import ParentComp from './Basics/ParentComp';
import RefsDemo from './Basics/RefsDemo';
import FocusInput from './Basics/FocusInput';
import FRParent from './Basics/FRParent';
import PortalDemo from './Basics/PortalDemo';
import Hero from './Basics/Hero';
import ErrorBoundary from './Basics/ErrorBoundary';
import ClickCounter from './Basics/ClickCounter';
import HoverCounter from './Basics/HoverCounter';
import ClickCounterTwo from './Basics/ClickCounterTwo';
import HoverCounterTwo from './Basics/HoverCounterTwo';
import RCounter from './Basics/RCounter';


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
      <RCounter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} increment={incrementCount} />
        )}
      />
       <RCounter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} increment={incrementCount} />
        )}
      />

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
    </div>
  );
}

export default App;
