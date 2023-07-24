import CounterContainer from "../../common/Counter/CounterContainer"


const ItemDetail = ( { product, agregarAlCarrito, cantidadEnCarro } ) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>

      <CounterContainer cantidadEnCarro={cantidadEnCarro} stock={product.stock} agregarAlCarrito={agregarAlCarrito } />
    </div>
  )
}

export default ItemDetail