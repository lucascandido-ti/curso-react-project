class Person {

    constructor(name = 'Anonimo', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am  ${ this.name }!`;
    }

    getDescription(){
        return `${ this.name } is ${ this.age } year(s) old!`;
    }
}

const me = new Person('Lucas Candido', 23);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());


const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const template = (
        <div>
            <p>{me.getDescription()}</p>
            <p>{other.getDescription()}</p>
        </div>
        
    );
    ReactDOM.render(template, appRoot);
}
renderTemplate();