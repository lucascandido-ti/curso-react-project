import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './component/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor(){
//         this.name = "Mike";
//         this.getGreeting = this.getGreeting.bind(this)
//     }

//     getGreeting(){
//         return `Hi. My name is ${this.name}.`
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting
// console.log(getGreeting())

// // -------------

// class NewSyntax {
//     name = 'Jane'
//     getGreeting = () => {  return `Hi. My name is ${this.name}.` }
// }

// const newSyntax = new NewSyntax()
// const newGreeting = newSyntax.getGreeting
// console.log(newGreeting())