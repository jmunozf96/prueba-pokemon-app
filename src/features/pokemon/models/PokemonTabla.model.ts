import {Tabla} from "../../../interfaces";

export const PokemonTabla = Object.freeze({
    getColumns(): Tabla[] {
        return [
            {nombre: 'nombre', descripcion: 'Nombre'},
            {nombre: 'imagen', descripcion: 'Imágen'},
            {nombre: 'ataque', descripcion: 'Ataque'},
            {nombre: 'defensa', descripcion: 'Defensa'},
        ]
    }
})
