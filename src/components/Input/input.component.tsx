import React, {FunctionComponent} from "react";
import PropTypes, {InferProps} from "prop-types";
import {InputType} from "../../interfaces";

const InputComponentPropTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    change: PropTypes.func,
    value: PropTypes.any,
    valid: PropTypes.bool
};
type ComponentTypes = InferProps<typeof InputComponentPropTypes>;
export const Input: FunctionComponent<ComponentTypes & InputType> = ({type, label, change, name, value, valid}) => {
    return (
        <div className="align-items-center" style={{display: 'flex'}}>
            <label className="me-3" htmlFor="input" style={{width: 60}}>{label}</label>
            <div style={{width: 300}}>
                <input
                    id="input"
                    className="input"
                    name={name!}
                    type={type}
                    onChange={event => change!(event)}
                    value={value}/>
                {valid && <small style={{color: 'red', fontSize: 10}}><em>Campo es requerido</em></small>}
            </div>
        </div>
    )
}
