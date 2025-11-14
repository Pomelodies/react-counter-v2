import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Counter = (props) => {
  // console.log(props)
  return (
    <>
      <div className="buttonCounter">
        <button>
          <FaMinus
            onClick={() => {
              props.setCounter(props.counter - 1);
            }}
          />
        </button>
        <div className="counter">{props.counter}</div>
        <button>
          <FaPlus
            onClick={() => {
              props.setCounter(props.counter + 1);
            }}
          />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            props.setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
