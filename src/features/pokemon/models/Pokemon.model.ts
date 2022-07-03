import {v4 as uuidv4} from 'uuid';
import {IPokemonRest} from "../interfaces";

export class Pokemon {
    id: number;
    uuid: string;
    nombre: string;
    imagen: string;
    ataque: number;
    defensa: number;

    public static instanceNewObject(data: any) {
        const pokemon = new Pokemon();
        pokemon.id = data['id'] ?? pokemon.id;
        pokemon.uuid = data['uuid'] ?? pokemon.uuid;
        pokemon.nombre = data['nombre'] ?? pokemon.nombre;
        pokemon.imagen = data['imagen'] ?? pokemon.imagen;
        pokemon.ataque = +data['ataque'] ?? pokemon.ataque;
        pokemon.defensa = +data['defensa'] ?? pokemon.defensa;
        return pokemon;
    }

    public static instanceNewObjectFromApi(data: any) {
        const pokemon = new Pokemon();
        pokemon.id = data['id'] ?? pokemon.id;
        pokemon.nombre = data['name'] ?? pokemon.nombre;
        pokemon.imagen = data['image'] ?? pokemon.imagen;
        pokemon.ataque = data['attack'] ?? pokemon.ataque;
        pokemon.defensa = data['defense'] ?? pokemon.defensa;
        return pokemon;
    }

    public toJson(): Partial<IPokemonRest>  {
        return {
            id: this.id,
            name: this.nombre,
            image: this.imagen,
            attack: this.ataque,
            defense: this.defensa,
            hp: 0,
            type: 'Prueba',
            idAuthor: 1
        }
    }

    constructor() {
        this.id = 0;
        this.uuid = uuidv4();
        this.nombre = '';
        this.imagen = '';
        this.ataque = 0;
        this.defensa = 0;
    }
}
