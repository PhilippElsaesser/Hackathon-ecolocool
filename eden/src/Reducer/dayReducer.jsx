const initialState = {
    day: 0
}

export function dayReducer(state = initialState, action) {
    switch (action.type) {
        case "NEXT_DAY":
            return {
                ...state,
                day: state.day + 1
            }
        case "RESET_DAY":
            return {
                ...state,
                day: 1
            }
        default:
            return state
    }
}

export default dayReducer