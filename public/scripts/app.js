'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handlerDeleteOptions = _this.handlerDeleteOptions.bind(_this);
        _this.handlerPick = _this.handlerPick.bind(_this);
        _this.handlerAddOption = _this.handlerAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handlerDeleteOptions',
        value: function handlerDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlerPick',
        value: function handlerPick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            var op = this.state.options[random];
            alert(op);
        }
    }, {
        key: 'handlerAddOption',
        value: function handlerAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlerPick: this.handlerPick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handlerDeleteOptions: this.handlerDeleteOptions
                }),
                React.createElement(AddOption, {
                    handlerAddOption: this.handlerAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// class Header extends React.Component{
//     render() {
//         return (
//           <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//           </div>  
//         );
//     }
// }

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlerPick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

// class Action extends React.Component{
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlerPick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }


var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlerDeleteOptions },
            'Remove Options'
        ),
        props.options.map(function (op) {
            return React.createElement(Option, { key: op, optionText: op });
        })
    );
};

// class Options extends React.Component{

//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlerDeleteOptions}>Remove Options</button>
//                 {this.props.options.map((op) => <Option key={op} optionText={op}/>)}
//             </div>
//         );
//     }
// }


var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optionText
    );
};

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                Option: {this.props.optionText}
//             </div>
//         );
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handlerAddOption = _this2.handlerAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handlerAddOption',
        value: function handlerAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handlerAddOption(option);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handlerAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
