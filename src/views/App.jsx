import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Context from '../Components/Context';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import GlobalStyle from '../style/Global';

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Context/>
        <Footer/>
      </Router>
    </>
  )
}
