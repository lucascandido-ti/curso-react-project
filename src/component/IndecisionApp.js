import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handlerDeleteOptions = this.handlerDeleteOptions.bind(this)
        this.handlerDeleteOption=this.handlerDeleteOption.bind(this)
        this.handlerPick = this.handlerPick.bind(this)
        this.handlerAddOption = this.handlerAddOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount(){
        try{
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if(options) {
            this.setState(()=>({ options }))
        }
        }catch(e){

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount!')
    }

    handlerDeleteOptions(){
        this.setState(() =>({ options: [] }))
    }

    handlerDeleteOption(optionToRemove) {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    }

    handlerPick(){
        const random = Math.floor(Math.random() * this.state.options.length)
        const op = this.state.options[random]
        alert(op)
    }

    handlerAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>({ options: prevState.options.concat([option]) }));
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div> 
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlerPick={this.handlerPick}
                />
                <Options 
                    options={this.state.options}
                    handlerDeleteOptions={this.handlerDeleteOptions}
                    handlerDeleteOption={this.handlerDeleteOption}
                />
                <AddOption
                    handlerAddOption={this.handlerAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp