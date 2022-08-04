
import React from 'react';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="*" element={<ItemListContainer />} /> {/* ruta que dirije a listado de productos si no se encuentra la ruta que el usuario desea */}
      </Routes>
    </React.StrictMode>
  );
}

export default App;