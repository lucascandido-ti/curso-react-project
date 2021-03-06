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

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
            {/* <h2>{props.subtitle}</h2> */}
          </div> 
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

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

const Options = (props) =>{
    return(
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
}

const Option = (props) => {
    return(
        <div>
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handlerDeleteOption(props.optionText)
                }}>Remove</button>
        </div>
    )
}

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

const User = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));