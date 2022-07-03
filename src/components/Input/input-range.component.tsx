import React, {FunctionComponent} from "react";
import PropTypes, {InferProps} from "prop-types";

const InputRangeComponentPropTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    change: PropTypes.func,
    value: PropTypes.any
};
type ComponentTypes = InferProps<typeof InputRangeComponentPropTypes>;
export const InputRange: FunctionComponent<ComponentTypes> = ({label, change, name, value}) => {
    return (
        <div className="align-items-center" style={{display: 'flex'}}>
            <label className="me-3" htmlFor="range" style={{width: 70}}>{label}</label>
            <span className='me-2'>0</span>
            <div className="slide-container">
                <input
                    type="range"
                    className="slider"
                    id="range"
                    name={name!}
                    onChange={event => change!(event)}
                    value={value}
                    min={0}
                    max={100}/>
                <div style={{width: '100%', textAlign: 'center'}}><small style={{width: '100%'}}><b>{value}</b></small></div>
            </div>
            <span className='ms-2'>100</span>
        </div>
    );
}
