import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={{ Dashboard }} />
          <Route path="/ticket" element={{ TicketPage }} />


        </Routes>
      </BrowserRouter>
      <div>
        Home
      </div>

    </div>
  );
}

export default App;
