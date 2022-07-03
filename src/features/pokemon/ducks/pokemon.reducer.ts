import {Pokemon} from "../models";
import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../app/store";

type DataPokemon = {
    array: Pokemon[],
}

const initialState: DataPokemon = {
    array: [],
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        iniciar: (state: Draft<DataPokemon>, {payload}: PayloadAction<Pokemon[]>) => {
            state.array = payload;
        },
        agregar: (state: Draft<DataPokemon>, {payload}: PayloadAction<Pokemon>) => {
            state.array.push(payload);
        },
        actualizar: (state: Draft<DataPokemon>, {payload}: PayloadAction<Pokemon>) => {
            state.array = state.array.map(src => {
                if (src.uuid === payload.uuid) return payload;
                return src;
            })
        },
        eliminar: (state: Draft<DataPokemon>, {payload}: PayloadAction<Pokemon>) => {
            state.array = state.array.filter(src => src.uuid !== payload.uuid);
        },
        filtrar: (state: Draft<DataPokemon>, {payload}: PayloadAction<string>) => {
            const PATTERN = payload.toLowerCase().trim();
            if (PATTERN.length > 0) {
                const dataFilter = [...state.array.filter(src => src.nombre.toLowerCase().trim().includes(PATTERN))];
                if (dataFilter.length > 0) state.array = dataFilter;
            }
        },
    }
})

export const {iniciar, agregar, actualizar, eliminar, filtrar} = pokemonSlice.actions;
export const selectPokemons = (state: RootState) => state.pokemon.array;
export default pokemonSlice.reducer
