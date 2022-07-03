import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, InputIcon} from "../../../components";
import {ListadoPokemon} from "../components/listado.component";
import {Pokemon as PokemonModel, PokemonTabla} from "../models";
import {FormularioPokemon} from "../components/formulario.component";
import {eliminarPokemon, filtrarPokemon, listarPokemones, selectPokemons} from "../ducks";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {ButtonAction} from "../../../components/Button/button-action.component";

export const Pokemon = () => {
    const [nuevo, setNuevo] = useState(false);
    const [editPokemon, setEditPokemon] = useState<PokemonModel | undefined>(undefined);
    const pokemons = useAppSelector(selectPokemons);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(listarPokemones());
        })();
    }, [dispatch]);

    const agregarPokemon = () => {
        setNuevo(true);
        if (editPokemon) setEditPokemon(undefined);
    }

    const cancelar = () => {
        if (nuevo) setNuevo(false);
        if (editPokemon) setEditPokemon(undefined);
    }

    const editar = (pokemon: PokemonModel) => {
        setEditPokemon(pokemon);
        setNuevo(true);
    }

    const eliminar = async (pokemon: PokemonModel) => {
        if (editPokemon || nuevo) {
            alert('Cancele la acción que esta realizando para eliminar el item.');
            return;
        }
        await dispatch(eliminarPokemon(pokemon));
    }

    const filtrar = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(filtrarPokemon(value))
    }

    return (
        <div className="container-fluid px-4 py-4">
            <div className="row">
                <div className='col-md-12'>
                    <div className="title">
                        <p>Listado de Pokemon</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <InputIcon type='text' icon='fa fa-search icon' change={filtrar}/>
                </div>
                <div className="col-md-6 d-flex" style={{justifyContent: 'end'}}>
                    <Button label='Nuevo' icon='fa fa-plus' click={agregarPokemon}/>
                </div>
            </div>
            <div className="row" style={{marginTop: 10}}>
                <div className="col-md-12 table-responsive">
                    <ListadoPokemon columnas={PokemonTabla.getColumns()}>
                        <>
                            {pokemons.map(src =>
                                <tr key={src.uuid}>
                                    <td>{src.nombre}</td>
                                    <td style={{textAlign: 'center'}}>
                                        <img src={src.imagen} alt="pokemon-img" width={35}/>
                                    </td>
                                    <td style={{textAlign: 'center'}}>{src.ataque}</td>
                                    <td style={{textAlign: 'center'}}>{src.defensa}</td>
                                    <td style={{textAlign: 'center'}}>
                                        <ButtonAction icon='fa fa-pencil-square-o' click={() => editar(src)}/>
                                        <ButtonAction icon='fa fa-trash-o' click={() => eliminar(src)}/>
                                    </td>
                                </tr>
                            )}
                        </>
                    </ListadoPokemon>
                </div>
            </div>
            {
                <>
                    {nuevo &&
                        <div className="row">
                            <div className="col-md-12">
                                <FormularioPokemon cancelar={cancelar} initialValue={editPokemon}/>
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    );
}
