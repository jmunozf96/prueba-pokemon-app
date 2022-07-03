import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import PokemonReducer from '../features/pokemon/ducks/pokemon.reducer';

export const store = configureStore({
    reducer: {
        pokemon: PokemonReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
