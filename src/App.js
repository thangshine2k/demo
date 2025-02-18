import React from 'react';
import Header from './component/Header';
import MainContent from './component/MainContent';
import Footer from './component/Footer';
import './App.css'
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
