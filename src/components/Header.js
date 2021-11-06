import { HiShoppingBag } from "react-icons/hi";
import { useGlobalContext } from "./context";

const Header = () => {
  const { gadgets } = useGlobalContext();

  return (
    <header>
      <h1>UseReducer</h1>
      <div>
        <p>
          {gadgets.reduce((tot, item) => {
            return item.amount + tot;
          }, 0)}
        </p>
        <HiShoppingBag />
      </div>
    </header>
  );
};

export default Header;
