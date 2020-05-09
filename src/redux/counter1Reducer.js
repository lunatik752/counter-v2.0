export const INCREMENT_CURRENT_VALUE = "counter1/reducer/INCREMENT_CURRENT_VALUE"
export const SET_COUNTER_VALUE_SETTINGS = "counter1/reducer/SET_COUNTER_VALUE_SETTINGS"
export const UPDATE_START_VALUE = "counter1/reducer/UPDATE_START_VALUE"
export const UPDATE_MAX_VALUE = "counter1/reducer/UPDATE_MAX_VALUE"
// export const DELETE_TASK = "todolist/reducer/DELETE-TASK"
// export const CHANGE_NEW_TASK_TITLE = "todolist/reducer/CHANGE-NEW-TASK-TITLE"


const initialState = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
}

export const counter1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_VALUE:
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        case SET_COUNTER_VALUE_SETTINGS:
            return {
                ...state,
                currentValue: state.startValue
            }
        case UPDATE_START_VALUE:
            return {
                ...state,
                startValue: action.newValue
            }
        case UPDATE_MAX_VALUE:
            return {
                ...state,
                maxValue: action.newValue
            }
        default:
            return state;
    }
}

export const incrementCurrentValueAC = () => {
    return {type: INCREMENT_CURRENT_VALUE}
}

export const setCounterValueSettingsAC = () => {
    return {type: SET_COUNTER_VALUE_SETTINGS};
}


export const updateStarsValueAC = (newValue) => {
    return {type: UPDATE_START_VALUE, newValue};
}

export const updateMaxValueAC = (newValue) => {
    return {type: UPDATE_MAX_VALUE, newValue};
}
