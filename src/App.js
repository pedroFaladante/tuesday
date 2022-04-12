import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
<<<<<<< HEAD
import TicketPage from './pages/TicketPage'
import TestCard from './components/TestCard'
import Nav from './components/Nav'
=======


>>>>>>> f7c98d548839c14295562d2fc5baf10092591396


function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
<Dashboard/>
>>>>>>> f7c98d548839c14295562d2fc5baf10092591396
    </div>
    </React.StrictMode>
  );
}

export default App;
