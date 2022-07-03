import React, {FunctionComponent} from "react";
import PropTypes, {InferProps} from "prop-types";
import {Tabla} from "../../../interfaces";

interface ListadoColumns {
    columnas: Tabla[]
}

const ListadoPokemonComponentPropTypes = {
    children: PropTypes.element.isRequired,
    columnas: PropTypes.array.isRequired
};
type ComponentTypes = InferProps<typeof ListadoPokemonComponentPropTypes>;
export const ListadoPokemon: FunctionComponent<ListadoColumns & ComponentTypes> = ({columnas, children}) => {
    return (
        <table className="table table-bordered">
            <thead style={{textAlign: 'center'}}>
            <tr>
                {columnas.map(src => <th key={src.nombre}>{src.descripcion}</th>)}
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </table>
    )
}
