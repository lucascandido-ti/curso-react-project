import React from 'react'


export default class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.handlerAddOption = this.handlerAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handlerAddOption(e){
        e.preventDefault();
        console.log('testting')
        const option = e.target.elements.option.value.trim();
        const error = this.props.handlerAddOption(option);
        
        this.setState(()=>({ error: error }))

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handlerAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
