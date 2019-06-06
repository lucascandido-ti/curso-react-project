'use strict';

console.log("App.js is running");

// JSX - Javascript XML

var app = {
    title: 'Aplicativo de Indecisão',
    subtitle: 'Coloque sua vida nas mãos de um computador',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    app.options.length > 0 ? React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one: ',
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            'Item two: ',
            app.options[1]
        )
    ) : 'No option'
);

var count = 0;
var addOne = function addOne() {
    count += +1;
    console.log(count);
    return count;
};

var minusOne = function minusOne() {
    count += -1;
    console.log(count);
    return count;
};

var reset = function reset() {
    count = 0;
    console.log(count);
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        addOne
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
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

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
