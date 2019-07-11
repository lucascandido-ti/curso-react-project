import React from 'react'

const Action = (props) =>(
    
        <div>
            <button 
                className="big-button"
                onClick={props.handlerPick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
)

export default Action