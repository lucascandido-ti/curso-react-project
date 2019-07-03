class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handlerAddOne = this.handlerAddOne.bind(this);
        this.handlerMinusOne = this.handlerMinusOne.bind(this);
        this.handlerReset = this.handlerReset.bind(this);
        this.state = { count: props.count }
    }
    handlerAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count +=1
            }
        })
    }
    handlerMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -= 1
            }
        })
    }
    handlerReset(){
        this.setState(() => {
            return {  count: 0  }
        })
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

ReactDOM.render(<Counter count={[1]}/>, document.getElementById('app'))
