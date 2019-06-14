

class Visibility extends React.Component{
    render(){
        const title = 'Visibility Toggle'
        return(
            <div>
               <Header title={title}/>
               <Toggle />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
            visibility: false
        };
    }
    
    toggleVisibility(){
       this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           }
       })
    }
    render(){
        return(
            <div>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ?
                        'Hide details' : 'Show details'}
                    </button>
                    {this.state.visibility && (
                        <div>
                            <p>Hey. These are some details you can see !</p>
                        </div>
                    )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))


// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderTemplate();
// }

// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can see !</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
// renderTemplate();
