
import Home from "./Componets/page/home/Home"
import ItemListContainer from "./Componets/page/itemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      
      <Home /> 
    
      <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ItemListContainer greeting="Importa tus Remeras desde USA"  />
      </div>
    </div>
  );
};
 

export default App;
