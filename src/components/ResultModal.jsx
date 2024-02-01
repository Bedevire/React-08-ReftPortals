import { useRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset}, ref){
    
    const dialog = useRef();
    const userLost = timeRemaining <= 0;
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
    const score = ((1 - (timeRemaining / (targetTime * 1000))) * 100).toFixed(0);
    
    useImperativeHandle(ref, () => {
        return{
            open() {
                dialog.current.showModal();
            }
        };
    });
 
    return createPortal(
        <dialog ref={dialog} onClose={onReset} className="result-modal">
            {userLost && 
                <>
                    <h2>You lost </h2>
                </>
            }
            {!userLost && 
                <>
                    <h2>Your Score: {score}</h2>
                    <p>You stopped the time with {formattedRemainingTime} seconds left</p>
                </>
            }
            
            <p>Target time was <strong>{targetTime} secs.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultModal;