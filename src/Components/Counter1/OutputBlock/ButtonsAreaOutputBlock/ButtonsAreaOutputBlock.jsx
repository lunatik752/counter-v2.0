import React from 'react';
import style from './ButtonsAreaOutputBlock.module.css';
import Button from "../../../Button/Button";


const ButtonsAreaOutputBlock = (props) => {


    return (
        <div className={style.buttonsArea}>
            <Button title={'inc'}
                    onClick={props.incrementCurrentValue}
            />
            <Button title={'reset'}
            />
        </div>

    );
}

export default ButtonsAreaOutputBlock;
