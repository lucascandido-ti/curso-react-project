class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handlerDeleteOptions = this.handlerDeleteOptions.bind(this)
        this.handlerPick = this.handlerPick.bind(this)
        this.handlerAddOption = this.handlerAddOption.bind(this)
        this.state = {
            options: []
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

    handlerAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat([option])
            }
        });
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
                <AddOption
                    handlerAddOption={this.handlerAddOption}
                />
            </div>
        );
    }
}

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
          </div> 
    )
}


// class Header extends React.Component{
//     render() {
//         return (
//           <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//           </div>  
//         );
//     }
// }

const Action = (props) =>{
    return(
        <div>
            <button 
                onClick={props.handlerPick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
    )
}

// class Action extends React.Component{
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlerPick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }


const Options = (props) =>{
    return(
        <div>
            <button onClick={props.handlerDeleteOptions}>Remove Options</button>
            {props.options.map((op) => <Option key={op} optionText={op}/>)}
        </div>
    )
}

// class Options extends React.Component{

//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlerDeleteOptions}>Remove Options</button>
//                 {this.props.options.map((op) => <Option key={op} optionText={op}/>)}
//             </div>
//         );
//     }
// }


const Option = (props) => {
    return(
        <div>
            Option: {props.optionText}
        </div>
    )
}


// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                Option: {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.handlerAddOption = this.handlerAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handlerAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handlerAddOption(option);
        
        this.setState(()=>{
            return {
                error: error
            }
        })
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

const User = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));