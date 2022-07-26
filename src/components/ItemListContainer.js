import React from 'react';
import ItemCount from './ItemCount'


function ItemListContainer() {
  const onAdd = (cantidad) =>{
    console.log(`agregaste ${cantidad} de items`)
  }
  return (
    <div>
        <ItemCount initial={1} stock={15} onAdd={onAdd} />             
    </div>
  );
}

export default ItemListContainer;