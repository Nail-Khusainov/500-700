import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import NewsPage from '../../pages/NewsPage/NewsPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<MainPage />} exact path="/" />
        <Route element={<NewsPage />} path="/newspage/:id" />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;