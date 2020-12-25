interface IGakkou {
  nawa: string;
  sayHello(): void;
}

class Gakkou {
  public nawa: string = 'Senshu';

  public sayHello(): void {
    console.log('Hello', this.nawa);
  }
}

class Monbu {
  public nawa: IGakkou;

  constructor(nawa: IGakkou) {
    this.nawa = nawa;
  }
}

const gakkou = new Gakkou();
const monbu = new Monbu(gakkou);
monbu.nawa.sayHello();