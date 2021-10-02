// El nombre de las clases debe ir en mayusculas la primera letra
class Pokemon {
    #name = ''; /* con el # los datos son inaccesibles desde fuera */
    #type = '';
    #evolutions = [];

    constructor(name, type, evolutions) {
        /* this para evitar que cuando se contruya el objeto no haya dudas a que valor nos referimos (atributo de las clases)*/
        this.#name = name; 
        this.#type = type;
        this.#evolutions = evolutions; /* posibles evoluciones */
    }
    
    set name(name) { /* si necesita parametro porque asigna el valor de name */
        if(name == '') {
            this.#name = 'No existe';
        }else {
            this.#name = name;
        }

        this.#name = name;
    }

    set type(type) {
        this.#type = type;
    }

    set evolutions(evolutions) {
        this.#evolutions = evolutions;
    }

    get name() {  /* no necesita parametro porque su funcion es es devolver valor */
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.#evolutions;
    }

    attack () {
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0) { /* valida que la evolucion exista */
        const EVOLE = this.#evolutions[evolution] || '';
        let message = ' No puedo evolucionar';

        if(EVOLE) {
            message = `${this.#name} esta evolucionando a ${EVOLE}`;
            this.#name = EVOLE;
        }
        return message;
    }
}
class TypeFire extends Pokemon { /* Herencia pokemon es el padre o super clase de typefire*/
    constructor (name, evolutions) {
        super(name, 'fire', evolutions);
    }
    message() {
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }
}

const charmander = new TypeFire('Charmander', ['Charmeleon', 'Charizar']);
console.log(charmander.message());

charmander.name = 'Gato'; /* accediendo al metodo name que sale del acceso de la herencia  */
console.log(charmander.message());