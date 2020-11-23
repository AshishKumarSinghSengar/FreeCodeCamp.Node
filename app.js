const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1, num2)=>{
    console.log('tutorial event has occured');
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name= name;
    }

    get name(){
        return(this._name);
    }
}

let pedro =new Person('pedro');

pedro.on('name',()=>{
    console.log('My Name is '+pedro.name);
});

pedro.emit('name');

let ashish = new Person('Ashish');

ashish.on('name',()=>{
    console.log('My Name is '+ashish.name);
});

ashish.emit('name');