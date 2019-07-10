import React from 'react'

const Option = (props) =>(
    
    <div>
        Option: {props.optionText}
        <button 
            onClick={(e) => {
                props.handlerDeleteOption(props.optionText)
            }}>Remove</button>
    </div>
)

export default Option