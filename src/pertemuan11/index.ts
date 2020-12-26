interface IBijuu {
  show(): void;
}

class Kyuubi implements IBijuu{
  public show(): void {
    console.log('Hello Kyuubi');
  }
}

class Hachibi implements IBijuu {
  public show(): void {
    console.log('Hello Hachibi');
  }
}

function cetakMethod<T extends IBijuu>(value: T[]): void {
  value.forEach(item => {
    item.show();
  });
}

const kurama = new Kyuubi();
const gyuuki = new Hachibi();

cetakMethod([kurama, gyuuki]);