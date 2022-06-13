import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/scrollToTop";
import Header from './components/header';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Popular from './pages/popular';
import PopularBook from './pages/popularBook';
import AuthorBook from './pages/authorBook';
import SearchBook from './pages/searchBook';
import { useState } from 'react';

function App() {

  const [navbarShown, setNavbarShown] = useState(false);

  const handleScroll = navbarShown => {
    if (window.pageYOffset >= 112) {
      setNavbarShown(true);
    } else if (navbarShown === true && window.pageYOffset < 112) {
      setNavbarShown(false);
    }
};

React.useEffect(() => {
    window.onscroll = () => handleScroll(navbarShown);
  }, [navbarShown]);

  return (
    <Router>
      <Header />
      <Navbar shown = {navbarShown}/>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element = {<Home />} />
          <Route exact path='/popular' element = {<Popular />} />
          <Route exact path='/popularbook/:id' element = {<PopularBook />} />
          <Route exact path='/authorbook/:id' element = {<AuthorBook />} />
          <Route exact path='/searchbook/:id' element = {<SearchBook />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
