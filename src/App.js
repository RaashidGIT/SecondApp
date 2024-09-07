// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Internal from './Components/Internal';
import Mymap from './Components/Mymap';
import Parent from './Components/Parent';
import SimpleMap from './Components/SimpleMap';
import StylingCss from './Components/StylingCss';

function App() {
  return (
    <div className="App">
    <SimpleMap/>
    <Parent/>
    <Mymap/>
    <StylingCss/>
    <Internal/>
    <Header/>
    </div>
  );
}

export default App;
