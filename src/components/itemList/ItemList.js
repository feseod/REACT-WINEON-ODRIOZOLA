import Item from '../item/Item'

const ItemList = ({products}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {products.map((product)=> <Item 
                                      key={product.id}  
                                      name={product.name}
                                      category={product.category}
                                      description={product.description}
                                      price={product.price}
                                      img={product.image}
                                      stock={product.stock}
                                    />)}
    </div>
  )
}

export default ItemList