import {PokemonHttpService} from "../../../services";
import {actualizar, agregar, eliminar, filtrar, iniciar} from "./pokemon.reducer";
import {Pokemon} from "../models";

export const listarPokemones = () => async (dispatch: any) => {
    try {
        const res = await PokemonHttpService.getAll();
        const map = [...res.data.map(src => Pokemon.instanceNewObjectFromApi(src))];
        dispatch(iniciar(map));
    } catch (e) {
        console.log(e);
    }
}

export const agregarPokemon = (pokemon: Pokemon) => async (dispatch: any) => {
    try {
        await PokemonHttpService.create(pokemon.toJson())
            .then(res => dispatch(agregar(Pokemon.instanceNewObjectFromApi(res.data))))
    } catch (e) {
        console.log(e);
    }
}

export const actualizarPokemon = (pokemon: Pokemon) => async (dispatch: any) => {
    try {
        await PokemonHttpService.update(pokemon.id, pokemon.toJson())
            .then(() => dispatch(actualizar(pokemon)));
    } catch (e) {
        console.log(e);
    }
}

export const eliminarPokemon = (pokemon: Pokemon) => async (dispatch: any) => {
    try {
        await PokemonHttpService.remove(pokemon.id)
            .then(() => dispatch(eliminar(pokemon)));
    } catch (e) {
        console.log(e);
    }
}

export const filtrarPokemon = (nombre: string) => (dispatch: any) => {
    if (nombre.length > 0) {
        dispatch(filtrar(nombre));
    } else dispatch(listarPokemones());
}
