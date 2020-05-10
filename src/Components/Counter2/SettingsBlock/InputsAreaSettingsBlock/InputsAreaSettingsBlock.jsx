import React from 'react';
import style from './InputsAreaSettingsBlock.module.css';
import InputForSettings from "../../../InputForSettings/InputForSettings";



const InputsAreaSettingsBlock = (props) => {

 const   maxValue = props.maxValue;
 const   startValue = props.startValue;


    let inputMaxValueError = startValue >= maxValue;
    let inputStartValueError = inputMaxValueError || startValue < 0;


    return (
        <div className={style.inputsArea}>
            <InputForSettings title={'max value'}
                              isInputError={inputMaxValueError}
                              inputValue={maxValue}
                              onChange={props.updateMaxValue}/>
            <InputForSettings title={'start value'}
                              isInputError={inputStartValueError}
                              inputValue={startValue}
                              onChange={props.updateStarsValue}
            />
        </div>
    );
}

export default InputsAreaSettingsBlock;
