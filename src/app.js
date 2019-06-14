class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handlerDeleteOptions = this.handlerDeleteOptions.bind(this)
        this.handlerPick = this.handlerPick.bind(this)
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing four']
        }
    }

    handlerDeleteOptions(){
        this.setState(() =>{
            return{
                options: []
            }
        })
    }

    handlerPick(){
        const random = Math.floor(Math.random() * this.state.options.length)
        const op = this.state.options[random]
        alert(op)
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div> 
                <Header title={title} subtitle={subtitle}/>
                <Action
                hasOptions={this.state.options.length > 0}
                handlerPick={this.handlerPick}
                />
                <Options 
                options={this.state.options}
                handlerDeleteOptions={this.handlerDeleteOptions}
                />
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        return (
          <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
          </div>  
        );
    }
}

class Action extends React.Component{
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlerPick}
                disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        );
    }
}


class Options extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.props.handlerDeleteOptions}>Remove Options</button>
                {this.props.options.map((op) => <Option key={op} optionText={op}/>)}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
               Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{
    onFormSubmit(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        
        if(option){
            alert(option);
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));