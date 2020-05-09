import React from 'react';
import style from './OutputBlock.module.css';
import ButtonsAreaOutputBlock from "./ButtonsAreaOutputBlock/ButtonsAreaOutputBlock";
import OutputValue from "./OutputValue/OutputValue";


const OutputBlock = (props) => {
    return (
        <div className={style.outputBlock}>
            <OutputValue
                currentValue={props.currentValue}/>
            <ButtonsAreaOutputBlock
                incrementCurrentValue={props.incrementCurrentValue}
            />
        </div>
    );
}

export default OutputBlock;
