import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({ image, name, category, description, price, stock, id }) => {
  
  return (
    
    <Link to={`/item/${id}`}>
      <div className="section-index">
                      <article className="article-index">
                          <img src={image} alt={name} />
                          <p>{name}</p>
                          <p>{category}</p>
                          <p>${price}</p>
                      </article>
      </div>
    </Link>

  )
}

export default Item