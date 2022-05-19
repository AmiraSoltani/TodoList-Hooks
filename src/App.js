import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
   
    <div className="App">
     <AddToDo/>
    
    </div>
   
  );
}

export default App;
