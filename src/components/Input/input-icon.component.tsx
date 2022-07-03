import React, {FunctionComponent} from "react";
import PropTypes, {InferProps} from "prop-types";
import {InputType} from "../../interfaces";

const InputIconComponentPropTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    change: PropTypes.func,
};
type ComponentTypes = InferProps<typeof InputIconComponentPropTypes>;
export const InputIcon: FunctionComponent<ComponentTypes & InputType> = ({type, icon, change}) => {
    return (
        <div style={{width: 300}}>
            <div className="icon-input-container">
                <label>
                    <i className={icon}/>
                    <input
                        className="icon-input"
                        type={type}
                        onChange={event => change!(event)}/>
                </label>
            </div>
        </div>
    )
};
