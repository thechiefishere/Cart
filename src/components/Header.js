import { HiShoppingBag } from "react-icons/hi";
import { useGlobalContext } from "./context";

const Header = () => {
  const { gadgets } = useGlobalContext();

  return (
    <header className="header">
      <h1>UseReducer</h1>
      <div className="purse-container">
        <p className="item-count">
          {gadgets.reduce((tot, item) => {
            return item.amount + tot;
          }, 0)}
        </p>
        <HiShoppingBag className="purse" />
      </div>
    </header>
  );
};

export default Header;
