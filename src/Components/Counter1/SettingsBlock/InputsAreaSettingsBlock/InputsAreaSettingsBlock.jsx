import React from 'react';
import style from './InputsAreaSettingsBlock.module.css';
import InputForSettings from "../../../InputForSettings/InputForSettings";



const InputsAreaSettingsBlock = (props) => {

    return (
        <div className={style.inputsArea}>
            <InputForSettings title={'max value'}
                              inputValue={props.maxValue}
                              onChange={props.updateMaxValue}/>
            <InputForSettings title={'start value'}
                              inputValue={props.startValue}
                              onChange={props.updateStarsValue}
            />
        </div>

    );
}

export default InputsAreaSettingsBlock;
