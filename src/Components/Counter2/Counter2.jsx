import React from 'react';
import style from "../Counter1/Counter1.module.css";
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import OutputBlock from "./OutputBlock/OutputBlock";




const Counter2 = (props) => {

    let isShow = props.state.isShowSettingsBlock;

    return (
        <div className={style.counterWrapper}>
            {isShow && <SettingsBlock startValue={props.state.startValue}
                            maxValue={props.state.maxValue}
                            isDisableSetButton={props.state.isDisableSetButton}
                            setCounterValueSettings={props.setResetCounterValueSettings}
                            updateStarsValue={props.updateStarsValue}
                            updateMaxValue={props.updateMaxValue}
            />}
            {!isShow && <OutputBlock currentValue={props.state.currentValue}
                          startValue={props.state.startValue}
                          maxValue={props.state.maxValue}
                          isDisableIncButton={props.state.isDisableIncButton}
                          isDisableSetButton={props.state.isDisableSetButton}
                          isDisableResetButton={props.state.isDisableResetButton}
                          resetCounterValueSettings={props.setResetCounterValueSettings}
                          incrementCurrentValue={props.incrementCurrentValue}
                          showSettingsBlock={props.showSettingsBlock}

            />}
        </div>
    );
}

export default Counter2;
