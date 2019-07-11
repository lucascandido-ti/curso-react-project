import React from 'react'
import Option from './Option'

const Options = (props) =>(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">You Options</h3>
                <button
                    className="button button--link"
                    onClick={props.handlerDeleteOptions}
                    >Remove Options</button>
            </div>

            {props.options.length === 0 && <p className="widget__message">Please add an option to get started !</p>}
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