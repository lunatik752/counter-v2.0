import React from 'react';
import style from './Counter1.module.css';
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import OutputBlock from "./OutputBlock/OutputBlock";


const Counter1 = (props) => {
    return (
        <div className={style.counterWrapper}>
            <SettingsBlock startValue={props.state.startValue}
                           maxValue={props.state.maxValue}
                           isDisableSetButton={props.state.isDisableSetButton}
                           setCounterValue={props.setCounterValue}
                           updateStarsValue={props.updateStarsValue}
                           updateMaxValue={props.updateMaxValue}
            />
            <OutputBlock currentValue={props.state.currentValue}
                         startValue={props.state.startValue}
                         maxValue={props.state.maxValue}
                         isDisableIncButton={props.state.isDisableIncButton}
                         isDisableSetButton={props.state.isDisableSetButton}
                         isDisableResetButton={props.state.isDisableResetButton}
                         resetCounterValue={props.resetCounterValue}
                         incrementCurrentValue={props.incrementCurrentValue}

            />
        </div>
    );
}


export default Counter1;
