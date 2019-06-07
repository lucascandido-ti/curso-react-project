'use strict';

console.log("App.js is running");

// JSX - Javascript XML

var app = {
    title: 'Aplicativo de Indecisão',
    subtitle: 'Coloque sua vida nas mãos de um computador',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {

    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

var remove = function remove() {
    app.options = [];
    renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
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
            app.options.length > 0 ? 'Aqui esta suas opções !' : 'Não a opções no momento !'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: remove },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (op) {
                return React.createElement(
                    'li',
                    { key: op },
                    'Item: ',
                    op
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();
