import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/NavBar/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">

    <NavBar></NavBar>
    
     <Pricing></Pricing>
     <AssignmentMarks></AssignmentMarks>
     <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
