const INCREMENT_CURRENT_VALUE = "counter1/reducer/INCREMENT_CURRENT_VALUE"
const SET_RESET_COUNTER_VALUES = "counter1/reducer/SET_RESET_COUNTER_VALUES"
const UPDATE_START_VALUE = "counter1/reducer/UPDATE_START_VALUE"
const UPDATE_MAX_VALUE = "counter1/reducer/UPDATE_MAX_VALUE"
const SET_SAVED_VALUE = "counter1/reducer/SET_SAVED_VALUE"


let initialState = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
    isDisableSetButton: true,
    isDisableIncButton: false,
    isDisableResetButton: false
}

export const counter1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_VALUE:
            let currentValue = state.currentValue + 1;
            let isDisableIncButton = currentValue === state.maxValue;
            return {
                ...state,
                currentValue: currentValue,
                isDisableIncButton: isDisableIncButton
            }
        case SET_RESET_COUNTER_VALUES:
            return {
                ...state,
                currentValue: state.startValue,
                isDisableSetButton: true,
                isDisableIncButton: false,
                isDisableResetButton: false

            }
        case UPDATE_START_VALUE: {
            let newValue = action.newValue;
            let isDisableSetButton = (newValue < 0) || (newValue >= state.maxValue)
            return {
                ...state,
                startValue: newValue,
                isDisableSetButton: isDisableSetButton,
                isDisableIncButton: true,
                isDisableResetButton: true
            }
        }
        case UPDATE_MAX_VALUE:
            let newValue = action.newValue;
            let startValue = state.startValue
            let isDisableSetButton = (newValue < 0) || (newValue <= startValue) || (startValue < 0);
            return {
                ...state,
                maxValue: action.newValue,
                isDisableSetButton: isDisableSetButton,
                isDisableIncButton: true,
                isDisableResetButton: true
            }
        case SET_SAVED_VALUE:
            debugger
            return {
                ...state,
                startValue: action.state.startValue,
                maxValue: action.state.maxValue,
                currentValue: action.state.startValue
            }
        default:
            return state;
    }
}

export const incrementCurrentValue = () => {
    return {type: INCREMENT_CURRENT_VALUE}
}

export const setResetCounterValueSettings = () => {
    return {type: SET_RESET_COUNTER_VALUES};
}


export const updateStarsValue = (newValue) => {
    return {type: UPDATE_START_VALUE, newValue};
}

export const updateMaxValue = (newValue) => {
    return {type: UPDATE_MAX_VALUE, newValue};
}

export const setSavedValues = (state) => {
    return {type: SET_SAVED_VALUE, state};
}