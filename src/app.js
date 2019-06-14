class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div> 
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
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
    handlerPick(){
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlerPick}>What should I do?</button>
            </div>
        );
    }
}


class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeOption = this.removeOption.bind(this);
    }
    removeOption(){
        console.log(this.props.options);
    }
    render(){
        return (
            <div>
                <button onClick={this.removeOption}>Remove Options</button>
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