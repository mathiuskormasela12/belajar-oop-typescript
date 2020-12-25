"use strict";
class Gakkou {
    constructor() {
        this.nawa = 'Senshu';
    }
    sayHello() {
        console.log('Hello', this.nawa);
    }
}
class Monbu {
    constructor(nawa) {
        this.nawa = nawa;
    }
}
const gakkou = new Gakkou();
const monbu = new Monbu(gakkou);
monbu.nawa.sayHello();
