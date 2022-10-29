import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../src/pages/HomePage/HomePage'
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route to={<HomePage/>}/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
