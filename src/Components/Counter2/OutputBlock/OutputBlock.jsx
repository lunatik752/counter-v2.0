import React from 'react';
import style from './OutputBlock.module.css';

import Button from "../../Button/Button";


const OutputBlock = (props) => {

const currentValue = props.currentValue;
const maxValue = props.maxValue;

    const outputClass = currentValue < maxValue ? style.outputValue : style.outputValueMax;

    return (
        <div className={style.outputBlock}>
            <div className={style.outputValueWrapper}>
                <span className={outputClass}>{currentValue}</span>
            </div>
            <div className={style.buttonsWrapper}>
                <Button title={'inc'}
                        onClick={props.incrementCurrentValue}
                        disabled={props.isDisableIncButton}
                />
                <Button title={'reset'}
                        onClick={props.resetCounterValueSettings}
                        disabled={props.isDisableResetButton}
                />
                <Button title={'set'}
                        onClick={props.showSettingsBlock}
                />

            </div>
        </div>
    );
}

export default OutputBlock;
