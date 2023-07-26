import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Layout from './Components/Layout';
import Thome from './Components/Thome';
import './App.css';

function App() {
  return(
    <div>
        <Header/>
        <Thome />
        <hr />
        <br />
        <Layout/>
        <Footer/>
    </div>
  )
}

export default App;
