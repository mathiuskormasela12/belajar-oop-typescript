"use strict";
class Kyuubi {
    show() {
        console.log('Hello Kyuubi');
    }
}
class Hachibi {
    show() {
        console.log('Hello Hachibi');
    }
}
function cetakMethod(value) {
    value.forEach(item => {
        item.show();
    });
}
const kurama = new Kyuubi();
const gyuuki = new Hachibi();
cetakMethod([kurama, gyuuki]);
