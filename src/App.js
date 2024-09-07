// import logo from './logo.svg';
import './App.css';
import Bootstrap1 from './Components/Bootstrap1';
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
    </div>
  );
}

export default App;
