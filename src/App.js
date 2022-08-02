
import React from 'react';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';



function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <ItemDetailContainer>

      </ItemDetailContainer>
      {/* <ItemListContainer>
        <p> Acá irá el catálogo de productos </p>
      </ItemListContainer> */}
    </React.StrictMode>
  );
}

export default App;
