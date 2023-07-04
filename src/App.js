import './App.css';
import User from './User';
import Home from './commponet/Home';
import Homecontainer from './container/Homecontainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        App componet
        <User data = {{name: 'Alfaiz'}}/>
        <Home />
        <Homecontainer />
      </header>
    </div>
  );
}

export default App;
