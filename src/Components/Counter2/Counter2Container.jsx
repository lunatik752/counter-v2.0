import React from 'react';
import {connect} from "react-redux";
import Counter2 from "./Counter2";
import {
    incrementCurrentValue,
    setResetCounterValueSettings, setSavedValues, showSettingsBlock,
    updateMaxValue,
    updateStarsValue
} from "../../redux/counter2Reducer";

class Counter2Container extends React.Component {

    componentDidMount = () => {
        this.restoreState()
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.props.state);
        localStorage.setItem('startSettingsCounter2', stateAsString)
    };


    restoreState = () => {
        let state = this.props.state;
        let stateAsString = localStorage.getItem('startSettingsCounter2');
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.props.setSavedValues(state);
    };



    setCounterValue = () => {
        this.props.setResetCounterValueSettings();
        this.saveState()
    };

    resetCounterValue = () => {
        this.props.setResetCounterValueSettings();
    }

    render() {
        return (
            <Counter2 {...this.props}
                      setCounterValue={this.setCounterValue}
                      resetCounterValue={this.resetCounterValue}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.counter2Page
    }
};


const ConnectCounter2 = connect(mapStateToProps, {incrementCurrentValue,setResetCounterValueSettings, updateStarsValue, updateMaxValue, showSettingsBlock, setSavedValues})(Counter2Container);
export default ConnectCounter2;
