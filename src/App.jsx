import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './App.css'
import Companies from "./Components/Companies/Companies"
import Residencies from './Components/Residencies/Residencies';
function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient"/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residencies/>
   </div>
  );
}

export default App;