import logo from './logo.svg';
import './App.css';
import Wishes from './Components/Greeting';//no need give .js extension
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';

function App() {
  return (
    <div className="App">
     <Counter/>
     <Wishes name="veera" subName="vee"></Wishes>
     <FunctionClick></FunctionClick>
     <ClassClick></ClassClick>
    </div>
  );
}

export default App;
