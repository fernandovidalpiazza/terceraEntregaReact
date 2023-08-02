import ProductCar from "../../common/productcar/Productcar";


const ItemList = ({ items }) => {

   
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "55px"
      }}
    >
      {items.map((item) => {
        return <ProductCar key={item.id} item={item} />;
      })}
    </section>
  
  );
};
export default ItemList;
