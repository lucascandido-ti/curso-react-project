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
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

class Student extends Person{

    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}


class Traveler extends Person{

    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    getGretting(){
        let gretting = super.getGretting();
        if(this.location){
            gretting += ` I'm visiting from ${this.location}`
        }
        return gretting;
    }
}



const me = new Traveler('Lucas Candido', 23, 'São Paulo');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());




const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const template = (
        <div>
            <p>{me.getGretting()}</p>
            <p>{other.getGretting()}</p>
        </div>
        
    );
    ReactDOM.render(template, appRoot);
}
renderTemplate();