import {connect} from "react-redux";
import Counter1 from "./Counter1";
import {
    incrementCurrentValueAC,
    setCounterValueSettingsAC,
    updateMaxValueAC,
    updateStarsValueAC
} from "../../redux/counter1Reducer";


const mapStateToProps = (state) => {
    return {
        startValue: state.counter1Page.startValue,
        maxValue: state.counter1Page.maxValue,
        currentValue: state.counter1Page.currentValue,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCurrentValue: () => {
            dispatch(incrementCurrentValueAC());
        },
        setCounterValueSettings: () => {
            dispatch(setCounterValueSettingsAC());
        },
        updateStarsValue: (newValue) => {
            dispatch(updateStarsValueAC(newValue));
        },
        updateMaxValue: (newValue) => {
            dispatch(updateMaxValueAC(newValue));
        },
    }
}

const Counter1Container = connect(mapStateToProps, mapDispatchToProps)(Counter1);
export default Counter1Container;
