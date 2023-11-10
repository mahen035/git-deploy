import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import ANewClassComponent from './components/MyClassComponent';

function App() {
  return (
    <div className="App">
     <h1>This is the main component</h1>
     <MyComponent myName = "David" age='28' />
     <ANewClassComponent myCity = "Milwaukee" id='101'/>
    </div>
  );
}

export default App;
