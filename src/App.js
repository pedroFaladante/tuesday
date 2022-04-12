import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import TestCard from './components/TestCard'
import Nav from './components/Nav'


function App() {
  return (
    <React.StrictMode>
    <TestCard/>
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Dashboard name={' Tuesday App'}/>}/>
          <Route path="/test" element={<TestCard/>}/>
          <Route path="/ticket:id" element={<TicketPage editMode={true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </React.StrictMode>
  );
}

export default App;
