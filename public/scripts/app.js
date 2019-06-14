'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility() {
        _classCallCheck(this, Visibility);

        return _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).apply(this, arguments));
    }

    _createClass(Visibility, [{
        key: 'render',
        value: function render() {
            var title = 'Visibility Toggle';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Toggle, null)
            );
        }
    }]);

    return Visibility;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Toggle = function (_React$Component3) {
    _inherits(Toggle, _React$Component3);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this3 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this3.toggleVisibility = _this3.toggleVisibility.bind(_this3);
        _this3.state = {
            visibility: false
        };
        return _this3;
    }

    _createClass(Toggle, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.toggleVisibility },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Hey. These are some details you can see !'
                    )
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

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
