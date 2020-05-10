import React from 'react';
import style from './ButtonsAreaSettingsBlock.module.css';
import Button from "../../../Button/Button";


const ButtonsAreaSettingsBlock = (props) => {
    return (
        <div className={style.buttonsArea}>
            <Button title={'set'}
                    onClick={props.setCounterValueSettings}
                    disabled={props.isDisableSetButton}/>
        </div>

    );
}

export default ButtonsAreaSettingsBlock;
