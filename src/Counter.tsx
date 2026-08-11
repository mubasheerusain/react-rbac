import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy , incrementAsync, useAppSelector, useAppDispatch} from "./store/counterSlice"

export const Counter = () => {
    const count = useAppSelector((state) => state.counter.value); 
    const dispatch = useAppDispatch(); 
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(incrementBy(5))}>increment by 5</button>
            <button onClick={() => dispatch(incrementAsync(2))}>increment by 2</button>
        </div>
    )
}