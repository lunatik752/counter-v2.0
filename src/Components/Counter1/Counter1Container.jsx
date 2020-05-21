import React from 'react';
import {connect} from "react-redux";
import {
    incrementCurrentValue,
    setResetCounterValueSettings, setSavedValues,
    updateMaxValue,
    updateStarsValue
} from "../../redux/counter1Reducer";
import Counter1 from "./Counter1";

class Counter1Container extends React.Component {

    componentDidMount = () => {
        this.restoreState()
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.props.state);
        localStorage.setItem('startSettingsCounter1', stateAsString)
    };


    restoreState = () => {
        let state = this.props.state;
        let stateAsString = localStorage.getItem('startSettingsCounter1');
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
            <Counter1 {...this.props}
                      setCounterValue={this.setCounterValue}
                      resetCounterValue={this.resetCounterValue}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.counter1Page
    }
};


const ConnectCounter1 = connect(mapStateToProps, {
    incrementCurrentValue,
    setResetCounterValueSettings,
    updateStarsValue,
    updateMaxValue,
    setSavedValues
})(Counter1Container);
export default ConnectCounter1;
