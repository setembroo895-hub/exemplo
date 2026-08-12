class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} foi ligado.`);
    }

    desligar() {
        console.log(`${this.marca} ${this.modelo} foi desligado.`);
    }
}

class Caminhao extends Veiculo {
    constructor(marca, modelo, capacidadeCarga) {
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga;
    }

    carregar(peso) {
        if (peso <= 0) {
            console.log("O peso da carga deve ser maior que zero.");
            return;
        }

        if (peso > this.capacidadeCarga) {
            console.log(
                `Carga excedida. O caminhão suporta no máximo ${this.capacidadeCarga} kg.`
            );
            return;
        }

        console.log(
            `Caminhão carregado com ${peso} kg de carga.`
        );
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    correr() {
        console.log(`${this.marca} ${this.modelo} está correndo!`);
    }
}

const caminhao1 = new Caminhao("Volvo", "FH 540", 30000);

console.log(`Marca: ${caminhao1.marca}`);
console.log(`Modelo: ${caminhao1.modelo}`);
console.log(`Capacidade de carga: ${caminhao1.capacidadeCarga} kg`);

caminhao1.ligar();
caminhao1.carregar(20000);
caminhao1.carregar(35000);
caminhao1.desligar();

const moto1 = new Moto("Honda", "CB 500", 500);

console.log(`Marca: ${moto1.marca}`);
console.log(`Modelo: ${moto1.modelo}`);
console.log(`Cilindradas: ${moto1.cilindradas} cc`);

moto1.ligar();
moto1.correr();
moto1.desligar();
 