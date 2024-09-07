// import logo from './logo.svg';
import './App.css';
import Bootstrap1 from './Components/Bootstrap1';
import Bootstrap2 from './Components/Bootstrap2';
import Bootstrap3 from './Components/Bootstrap3';
import Bootstrap4 from './Components/Bootstrap/Bootstrap4';
import Bootstrap5 from './Components/Bootstrap/Bootstrap5';
import Header from './Components/Header';
import Internal from './Components/Internal';
import Mymap from './Components/Mymap';
import Parent from './Components/Parent';
import SimpleMap from './Components/SimpleMap';
import StylingCss from './Components/StylingCss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <SimpleMap/>
    <Parent/>
    <Mymap/>
    <StylingCss/>
    <Internal/>
    <Header/>
    <Bootstrap1/>
    <Bootstrap2/>
    <Bootstrap3/>
    <Bootstrap4/>
    <Bootstrap5/>
    </div>
  );
}

export default App;
