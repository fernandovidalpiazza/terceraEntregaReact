

const Counter = ({counter, SetCounter,  agregarAlcarrito,stock }) => {
  return (
    <div>
        <button disabled = {counter < 2 } onClick={()=>SetCounter (counter - 1)}> - </button>
        <button> {counter} </button>
        <button disabled = {counter >=stock } onClick={() => SetCounter(counter + 1)}>+</button>


        <button onClick={()=> agregarAlcarrito (counter)}>Agregar al Carrito </button>
    </div>
  )
}

export default Counter