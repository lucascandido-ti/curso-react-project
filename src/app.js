console.log("App.js is running");

// JSX - Javascript XML

const app = {
    title: 'Aplicativo de Indecisão',
    subtitle: 'Coloque sua vida nas mãos de um computador',
    options: []
};

const onFormSubmit = (e) => {

    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
    
  };



const remove = () =>{
    app.options = [];
    renderTemplate();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderTemplate = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Aqui esta suas opções !' : 'Não a opções no momento !'}</p>
            <p>{app.options.length}</p>
            <ol>
            {
                app.options.map( (op) => <li key={op}>Item: {op}</li> )
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={remove}>Remove All</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();