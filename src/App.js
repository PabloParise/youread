import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popular from './pages/popular';
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route exact path='/popular' element = {<Popular />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
