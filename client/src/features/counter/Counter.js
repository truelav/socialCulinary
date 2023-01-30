import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from './counterSlice'

export const Counter = () => {

    const count = useSelector((state) => state.counter.counterValue)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}>

                    Increment

                </button>

                <div className=''>{count}</div>

                <button
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                >

                    Decrement

                </button>


                <button
                    aria-label="Decrement Value"
                    onClick={() => dispatch(incrementAsync(10))}
                >

                    Increment Async

                </button>

            </div>
        </div>
    )
}