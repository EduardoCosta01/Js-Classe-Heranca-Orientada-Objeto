import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoAequeiro
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao ='Detentor de lancas e flechas mágicas!'

    constructor(nome, destreza, elementoMagico, levalMagico, inteligencia) {
        super (nome)
        this.ladoAequeiro = new Arqueiro(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagico, levalMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoAequeiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}