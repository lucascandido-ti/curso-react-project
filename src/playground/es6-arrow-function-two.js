 const add = (a ,b) => {
    // console.log(arguments);
    return a + b;
 };

 console.log(add(55, 1, 1001));

 const user = {
    name: 'Lucas',
    cities: ['Santo André', 'São Paulo', 'Brasil'],
    printPlacesLived () {
        // const cityMessages = this.cities.map((city) =>{
        //     if(city = 'Santo André'){
        //         console.log(city + ', Cidade TOP');
        //     }if(city = 'São Paulo'){
        //         console.log(city + ', Cidade da Garoa');
        //     }if(city = 'Brasil'){
        //         console.log(city + ', um pais tropical');
        //     }
        // });
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
 };

 console.log(user.printPlacesLived());

 const multiplier = {
     numbers: [10, 20, 30],
     multiplyBy: 3,
     multiply() {
         return this.numbers.map((number) => number * this.multiplyBy);
     }
 }

 console.log(multiplier.multiply());