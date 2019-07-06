class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handlerAddOne = this.handlerAddOne.bind(this);
        this.handlerMinusOne = this.handlerMinusOne.bind(this);
        this.handlerReset = this.handlerReset.bind(this);
        this.state = { count: props.count }
    }

    componentDidMount(){
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)

        if(!isNaN(count)){
            this.setState(()=> ({ count: count }))
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }

    handlerAddOne(){
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    handlerMinusOne(){
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    }

    handlerReset(){
        this.setState(() => ({  count: 0  }))
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlerAddOne}>+1</button>
                <button onClick={this.handlerMinusOne}>-1</button>
                <button onClick={this.handlerReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))
