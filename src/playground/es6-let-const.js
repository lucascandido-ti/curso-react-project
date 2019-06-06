var nameVar = "Lucas";
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jan';
nameLet = 'Julian';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Hal';
    return petName;
}

var fullName = 'Luk Candido';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); 