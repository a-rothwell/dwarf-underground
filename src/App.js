import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './Header/Header'
import Footer from './Footer/Footer'
import Article from './Article/Article'
import Ad from './Ad/Ad'
import Other from './Other/Other'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="expanded row">
        <Article/>
        <Ad/>
        <Other/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
