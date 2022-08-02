import React, { useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import './Item.css';


const Item = ({producto}) => {
  const[mensaje, setMensaje] = useState(false)
  const { img, name, description, price, stock }=producto

  const onAdd = (cantidad) => {
    setMensaje(`Agregaste ${cantidad} items en el carrito`)
  }

  return (
    
    <div className="section-index">
                    <article className="article-index">
                        <img src={img} alt={name} />
                        <p>{name}</p>
                        <p>${price}</p>
                        <div class="button-position">
                            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>   
                        </div>
                    </article>
    </div>

  )
}

export default Item