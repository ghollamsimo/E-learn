import logome from './logome.png';
import './App.css';
import Navs from './components/navs/Navs'
import Header from './components/header/Header'
import Card from './components/cards/Card'
import Footer from './components/footer/Footer'
import Coment from './components/coment/Coment';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment >
      
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <Navs/>
      <Header/>
      <Card/>
      {/* <Coment/> */}
      <Footer/>
    </Fragment>
  );
}

export default App;
