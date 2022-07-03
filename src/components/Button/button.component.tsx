import React, {FunctionComponent} from "react";
import PropTypes, {InferProps} from 'prop-types';

const ButtonComponentPropTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    click: PropTypes.func,
    disabled: PropTypes.bool
};
type ComponentTypes = InferProps<typeof ButtonComponentPropTypes>;
export const Button: FunctionComponent<ComponentTypes> = ({className, label, icon, click, disabled}) => {
    return (
        <button className={`btn ${className}`} onClick={click!} disabled={disabled!}>
            <i className={icon} style={{marginRight: 5}}/> {label}
        </button>
    )
}
