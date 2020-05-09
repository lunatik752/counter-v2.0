import React from 'react';
import style from './Counter1.module.css';
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import OutputBlock from "./OutputBlock/OutputBlock";



const Counter1 = (props) => {
    return (
        <div className={style.counterWrapper}>
            <SettingsBlock startValue={props.startValue}
                           maxValue={props.maxValue}
                           setCounterValueSettings={props.setCounterValueSettings}
                           updateStarsValue={props.updateStarsValue}
                           updateMaxValue={props.updateMaxValue}
            />
            <OutputBlock currentValue={props.currentValue}
                         incrementCurrentValue={props.incrementCurrentValue}
            />
        </div>
    );
}


export default Counter1;
