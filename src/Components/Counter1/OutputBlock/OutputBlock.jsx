import React from 'react';
import style from './OutputBlock.module.css';

import Button from "../../Button/Button";


const OutputBlock = (props) => {

const currentValue = props.currentValue;
const maxValue = props.maxValue;
const startValue = props.startValue;



    const isCorrect = props.isDisableSetButton && (maxValue > startValue) && (startValue >= 0);
    const outputClass = currentValue < maxValue ? style.outputValue : style.outputValueMax;

    const isSettingValues = !props.isDisableSetButton;

    const isErrorSettingValues = (startValue >= maxValue) || (startValue < 0)


    return (
        <div className={style.outputBlock}>
            <div className={style.outputValueWrapper}>
                {isCorrect && <span className={outputClass}>{currentValue}</span>}
                {isSettingValues && <span className={style.outputValueText}>enter values and press 'set'</span>}
                {isErrorSettingValues && <span className={style.outputValueTextError}>Incorrect value!</span>}

            </div>
            <div className={style.buttonsWrapper}>
                <Button title={'inc'}
                        onClick={props.incrementCurrentValue}
                        disabled={props.isDisableIncButton}
                />
                <Button title={'reset'}
                        onClick={props.resetCounterValue}
                        disabled={props.isDisableResetButton}
                />
            </div>
        </div>
    );
}

export default OutputBlock;
