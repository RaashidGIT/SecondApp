// import logo from './logo.svg';
import './App.css';
import Mymap from './Components/Mymap';
import Parent from './Components/Parent';
import SimpleMap from './Components/SimpleMap';

function App() {
  return (
    <div className="App">
    <SimpleMap/>
    <Parent/>
    <Mymap/>
    </div>
  );
}

export default App;
