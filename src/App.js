import "./App.css";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { up } from "./counterSlice";

// function reducer(state, action) {
//   if (action.type === "up") {
//     return { ...state, value: state.value + action.step };
//   }

//   return state;
// }

// const initialState = { value: 0 };
// const store = createStore(reducer, initialState);

function Counter() {
  const count = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
    </Provider>
  );
}
