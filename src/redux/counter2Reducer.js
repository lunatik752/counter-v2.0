export const INCREMENT_CURRENT_VALUE = "counter2/reducer/INCREMENT_CURRENT_VALUE"
export const SET_RESET_COUNTER_VALUES = "counter2/reducer/SET_RESET_COUNTER_VALUES"
export const UPDATE_START_VALUE = "counter2/reducer/UPDATE_START_VALUE"
export const UPDATE_MAX_VALUE = "counter2/reducer/UPDATE_MAX_VALUE"
export const SHOW_SETTINGS_BLOCK = "counter2/reducer/SHOW_SETTINGS_BLOCK"


let initialState = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
    isDisableIncButton: false,
    isDisableSetButton: false,
    isShowSettingsBlock: false
}

export  const counter2Reducer = (state = initialState, action) => {
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
                isShowSettingsBlock: false,
                isDisableIncButton: false,
            }
        case UPDATE_START_VALUE: {
            let newValue = action.newValue;
            let isDisableSetButton = (newValue < 0) || (newValue >= state.maxValue)
            return {
                ...state,
                startValue: newValue,
                isDisableSetButton: isDisableSetButton
            }
        }
        case UPDATE_MAX_VALUE:
            let newValue = action.newValue;
            let startValue = state.startValue
            let isDisableSetButton = (newValue < 0) || (newValue <= startValue) || (startValue < 0);
            return {
                ...state,
                maxValue: action.newValue,
                isDisableSetButton: isDisableSetButton
            }

        case SHOW_SETTINGS_BLOCK:
            return {
                ...state,
                isShowSettingsBlock: true
            }

        default:
            return state;
    }
}

export const incrementCurrentValueAC = () => {
    return {type: INCREMENT_CURRENT_VALUE}
}

export const setResetCounterValueSettingsAC = () => {
    return {type: SET_RESET_COUNTER_VALUES};
}


export const updateStarsValueAC = (newValue) => {
    return {type: UPDATE_START_VALUE, newValue};
}

export const updateMaxValueAC = (newValue) => {
    return {type: UPDATE_MAX_VALUE, newValue};
}

export const showSettingsBlockAC = (newValue) => {
    return {type: SHOW_SETTINGS_BLOCK, newValue};
}


