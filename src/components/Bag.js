import { useGlobalContext } from "./context";
import Item from "./Item";

const Bag = () => {
  const { gadgets } = useGlobalContext();

  return (
    <section className="bag">
      <h1 className="title">YOUR BAG</h1>
      {gadgets.map((gadget) => {
        return <Item key={gadget.id} gadget={gadget} />;
      })}
      <hr />
      <div className="footer">
        <h3>Total</h3>
        <p>
          $
          {gadgets.reduce((total, item) => {
            return item.amount * item.price + total;
          }, 0)}
        </p>
      </div>
    </section>
  );
};

export default Bag;
