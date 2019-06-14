class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handlerAddOne = this.handlerAddOne.bind(this);
        this.handlerMinusOne = this.handlerMinusOne.bind(this);
        this.handlerReset = this.handlerReset.bind(this);
        this.state = { count: 0 }
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

ReactDOM.render(<Counter />, document.getElementById('app'))
