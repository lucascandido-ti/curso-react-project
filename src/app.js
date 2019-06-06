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
    count+= +1;
    console.log(count);
    return count;
};

const minusOne = () =>{
    count+= -1;
    console.log(count);
    return count;
};

const reset = () =>{
    count=0;
    console.log(count);
}

const templateTwo = (
    <div>
        <h1>Count: {addOne}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

console.log(templateTwo);

// const user = {
//     name: 'Lucas Candido',
//     age: 23,
//     location: 'Santo André'
// };

// // function getLocation(location){
// //     if (location != null){
// //         return <p>Localização: {location}</p>;
// //     }else{
// //         return <p>Localização: Unknown</p>;
// //     }
// // }

// const getLocation = (location) => location ? 'Localização: ' + location : 'Localização: Unknown';

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonimo'}</h1>
//         {(user.age && user.age >= 18) && <p>Idade: {user.age} Anos</p>}
//         {getLocation(user.location)}
//     </div>
// );

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);