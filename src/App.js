
import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <ItemListContainer>
        <p> Acá irá el catálogo de productos </p>
      </ItemListContainer>
    </React.StrictMode>
  );
}

export default App;
