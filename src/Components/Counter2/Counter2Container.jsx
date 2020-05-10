import {connect} from "react-redux";
import Counter2 from "./Counter2";
import {
    incrementCurrentValueAC,
    setResetCounterValueSettingsAC, showSettingsBlockAC,
    updateMaxValueAC,
    updateStarsValueAC
} from "../../redux/counter2Reducer";


const mapStateToProps = (state) => {
    return {
        state: state.counter2Page
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
        showSettingsBlock: () => {
            dispatch(showSettingsBlockAC());
        }
    }
}

const Counter2Container = connect(mapStateToProps, mapDispatchToProps)(Counter2);
export default Counter2Container;
