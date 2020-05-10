import React from 'react';
import style from './InputForSettings.module.css';


const InputForSettings = (props) => {
    let onValueChange = (e) => {
        let value = Number(e.currentTarget.value);
        props.onChange(value);
    };
    let classNameInput = props.isInputError ? style.input + ' ' + style.error : style.input;

    return (
        <div className={style.inputForSettings}>
            <label className={style.inputTitle}>{props.title}</label>
            <input  type='number'
                    className={classNameInput}
                    onChange={onValueChange}
                    value={props.inputValue}/>
        </div>

    );
}

export default InputForSettings;
