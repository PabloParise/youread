import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popular from './pages/popular';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import PopularBook from './pages/popularBook';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route exact path='/popular' element = {<Popular />} />
        <Route exact path='/popularbook/:id' element = {<PopularBook />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
