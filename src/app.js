class Header extends React.Component{
    render() {
        return (
          <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer</h2>
          </div>  
        );
    }
}

class Action extends React.Component{
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Remove extends React.Component{
    render(){
        return (
            <div>
                <button>Remove All</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <ol>
                    <li>Item One</li>
                    <li>Item Two</li>
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="options"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


const jsx = (
    <div> 
        <Header/>
        <Action/>
        <Remove/>
        <Options/>
        <AddOption/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));