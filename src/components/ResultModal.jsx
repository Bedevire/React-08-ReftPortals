import { forwardRef } from 'react'

const ResultModal = forwardRef(function ResultModal({ result, targetTime}, ref){
    return(
        <dialog ref={ref} className="result-modal">
            <h2>You {result} </h2>
            <p>Target time was <strong>{targetTime} secs.</strong></p>
            <p>You stopped the time with X seconds left</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;