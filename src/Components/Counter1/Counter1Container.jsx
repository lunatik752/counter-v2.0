import {connect} from "react-redux";
import Counter1 from "./Counter1";
import {
    incrementCurrentValueAC,
    setResetCounterValueSettingsAC,
    updateMaxValueAC,
    updateStarsValueAC
} from "../../redux/counter1Reducer";


const mapStateToProps = (state) => {
    return {
        state: state.counter1Page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCurrentValue: () => {
            dispatch(incrementCurrentValueAC());
        },
        setResetCounterValueSettings: () => {
            dispatch(setResetCounterValueSettingsAC());
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
