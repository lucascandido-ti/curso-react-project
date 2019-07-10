import React from 'react'
import Option from './Option'

const Options = (props) =>(
        <div>
            <button onClick={props.handlerDeleteOptions}>Remove Options</button>
            {props.options.length === 0 && <p>Please add an option to get started !</p>}
            {props.options.map((op) => (
                <Option 
                    key={op}
                    optionText={op}
                    handlerDeleteOption={props.handlerDeleteOption}
                />
            ))}
        </div>
    )

export default Options