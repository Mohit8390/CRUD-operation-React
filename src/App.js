import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="">
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/add" element={ <AddUser/> } />
        <Route path="/edit" element={ <EditUser/> }/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
