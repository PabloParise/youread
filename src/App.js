import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popular from './pages/popular';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import PopularBook from './pages/popularBook';
import AuthorBook from './pages/authorBook';
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element = {<Home />} />
          <Route exact path='/popular' element = {<Popular />} />
          <Route exact path='/popularbook/:id' element = {<PopularBook />} />
          <Route exact path='/authorbook/:id' element = {<AuthorBook />} />
        </Routes>
      </ScrollToTop>
      <Navbar />
    </Router>
  );
}

export default App;
