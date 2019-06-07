console.log("App.js is running");

// JSX - Javascript XML

const app = {
    title: 'Aplicativo de Indecisão',
    subtitle: 'Coloque sua vida nas mãos de um computador',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        
        {app.options.length > 0 ? 
        <ol>
            <li>Item one: {app.options[0]}</li>
            <li>Item two: {app.options[1]}</li>
        </ol>
        : 'No option'
        }
    
    </div>
);


let count = 0;
const addOne = () =>{
    count++;
    renderCounterApp();
};

const minusOne = () =>{
    count--;
    renderCounterApp();
};

const reset = () =>{
    count=0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();