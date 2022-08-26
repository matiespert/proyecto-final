import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import BlogPage from './pages/BlogPage';




function App() {
  return (
    <div className='App'>
      <Header />
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='contacto' element={<ContactoPage />} />
          <Route path='novedades' element={<NovedadesPage />} />
          {/* <Route path='blog' element={<BlogPage />} /> */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>


  );
}

export default App;
