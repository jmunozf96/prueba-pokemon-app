import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import {Button, Input, InputRange} from "../../../components";
import PropTypes, {InferProps} from "prop-types";
import {Pokemon} from "../models";
import {useAppDispatch} from "../../../app/hooks";
import {actualizarPokemon, agregarPokemon} from "../ducks";

const FormularioPokemonComponentPropTypes = {
    cancelar: PropTypes.func.isRequired,
    initialValue: PropTypes.object
};
type ComponentTypes = InferProps<typeof FormularioPokemonComponentPropTypes>;
export const FormularioPokemon: FunctionComponent<ComponentTypes> = ({cancelar, initialValue}) => {
    const dispatch = useAppDispatch();
    const [pokemon, setPokemon] = useState(new Pokemon());
    const [actionSave, setActionSave] = useState(true);
    const [valida, setValida] = useState(false);

    useEffect(() => {
        if (initialValue) {
            setPokemon(Pokemon.instanceNewObject(initialValue));
            setActionSave(false);
        }else {
            setPokemon(new Pokemon());
            setActionSave(true);
        }
    }, [initialValue])

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPokemon(Pokemon.instanceNewObject({
            ...pokemon,
            [e.target.name]: e.target.value
        }))
    }

    const onSavePokemon = async () => {
        try {
            await dispatch(agregarPokemon(pokemon)).then(() => {
                cancelar();
                clear();
            });
        } catch (e) {
            console.log(e);
        }
    }

    const onUpdatePokemon = async () => {
        try {
            await dispatch(actualizarPokemon(pokemon));
        } catch (e) {
            console.log(e);
        }
    }

    const clear = () => {
        setPokemon(new Pokemon());
    }

    const action = async () => {
        if (invalidForm()) {
            setValida(true);
            console.error('Formulario inválido');
            return;
        }
        if (actionSave) await onSavePokemon();
        else await onUpdatePokemon();
    }

    const invalidForm = (): boolean => {
        return pokemon.nombre.length === 0 && pokemon.imagen.length === 0;
    }

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-12" style={{textAlign: 'center'}}>
                    <div className="title">
                        <p>{actionSave ? `Nuevo Pokemon` : `Editar ${pokemon.nombre}`}</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <Input
                                label='Nombre'
                                type='text'
                                change={onChangeValue} name='nombre'
                                value={pokemon.nombre}
                                valid={valida && pokemon.nombre.length === 0}/>
                        </div>
                        <div className="col-md-12">
                            <Input
                                label='Imagen'
                                type='text'
                                change={onChangeValue}
                                name='imagen'
                                value={pokemon.imagen}
                                valid={valida && pokemon.imagen.length === 0}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <InputRange label='Ataque' change={onChangeValue} name='ataque' value={pokemon.ataque}/>
                        </div>
                        <div className="col-md-12">
                            <InputRange label='Defensa' change={onChangeValue} name='defensa' value={pokemon.defensa}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12 d-flex" style={{justifyContent: 'center'}}>
                    <Button
                        className='me-3'
                        label={actionSave ? 'Guardar' : 'Actualizar'}
                        icon='fa fa-save'
                        click={action}/>
                    <Button label='Cancelar' icon='fa fa-times' click={cancelar}/>
                </div>
            </div>
        </div>
    )
}
