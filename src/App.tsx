import { RootState } from "@reduxjs/toolkit/query"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";


function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-center mt-20 gap-4 items-center">
        <button className="btn btn-primary border-2 border-orange-300 p-2" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button className="btn btn-primary border-2 border-orange-300 p-2" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
