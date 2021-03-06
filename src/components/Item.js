import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useGlobalContext, ACTIONS } from "./context";

const Item = ({ gadget }) => {
  const { dispatch } = useGlobalContext();

  return (
    <article className="item">
      <img src={gadget.img} alt={gadget.title} />
      <div className="item-details">
        <h4>{gadget.title}</h4>
        <h5>{gadget.price}</h5>
        <button
          className="remove"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_GADGET, payload: gadget.id })
          }
        >
          remove
        </button>
      </div>
      <div className="item-num">
        <RiArrowUpSLine
          onClick={() =>
            dispatch({
              type: ACTIONS.INCREASE_GADGET,
              payload: { id: gadget.id },
            })
          }
        />
        {gadget.amount}
        <RiArrowDownSLine
          onClick={() =>
            gadget.amount === 1
              ? dispatch({ type: ACTIONS.DELETE_GADGET, payload: gadget.id })
              : dispatch({
                  type: ACTIONS.DECREASE_GADGET,
                  payload: { id: gadget.id },
                })
          }
        />
      </div>
    </article>
  );
};

export default Item;
