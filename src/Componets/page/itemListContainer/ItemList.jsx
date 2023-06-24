

const ItemList = ({ edad,  setEdad} ) => {
    return (
       
     
     <div>
        <h1> Aca va los items</h1>
        <h2>{edad}</h2>
        <button onClick={()=>setEdad (edad + 1)}>suma edad</button>
     </div>
     ) 
  }

  export default ItemList