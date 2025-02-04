import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";
import { RootState } from "../redux/store";
import { animated, useSpring } from "react-spring";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const bgSpring = useSpring({
    backgroundColor: `rgb(${count * 10}, ${255 - count * 10}, 255)`,
  });

  return (
    <animated.div style={{ ...bgSpring, padding: "20px", textAlign: "center" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </animated.div>
  );
};

export default Counter;
