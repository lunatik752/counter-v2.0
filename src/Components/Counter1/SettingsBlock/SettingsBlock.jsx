import React from 'react';
import style from './SettingsBlock.module.css';
import ButtonsAreaSettingsBlock from "./ButtonsAreaSettingsBlock/ButtonsAreaSettingsBlock";
import InputsAreaSettingsBlock from "./InputsAreaSettingsBlock/InputsAreaSettingsBlock";


const SettingsBlock = (props) => {


    return (
        <div className={style.settingsBlock}>
            <InputsAreaSettingsBlock
                startValue={props.startValue}
                maxValue={props.maxValue}
                updateStarsValue={props.updateStarsValue}
                updateMaxValue={props.updateMaxValue}/>
            <ButtonsAreaSettingsBlock
                setCounterValue={props.setCounterValue}
                isDisableSetButton={props.isDisableSetButton}/>

        </div>
    );
}

export default SettingsBlock;
