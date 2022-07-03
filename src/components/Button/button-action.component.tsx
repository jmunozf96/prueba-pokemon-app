import React, {CSSProperties, FunctionComponent} from "react";
import PropTypes, {InferProps} from "prop-types";

const style: CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#5853c0',
    padding: '12px 16px',
    fontSize: 16,
    cursor: 'pointer'
}

const ButtonActionComponentPropTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    click: PropTypes.func,
    disabled: PropTypes.bool
};
type ComponentTypes = InferProps<typeof ButtonActionComponentPropTypes>;
export const ButtonAction: FunctionComponent<ComponentTypes> = ({className, icon, click, disabled}) => {
    return (
        <button className={`btn ${className}`} onClick={click!} disabled={disabled!} style={style}>
            <i className={icon}/>
        </button>
    )
}
