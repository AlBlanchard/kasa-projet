import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/css/normalize.css';
import './styles/scss/base/_base.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Lodgement from './pages/Lodgement';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/logements/:id' element={<Lodgement />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
