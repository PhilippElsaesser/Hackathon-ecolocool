const initialState = {
    open: true,
}

export function popUpReducer(state = initialState, action) {
    switch (action.type) {
        case "IS_OPEN":
            return {
                ...state,
                open: !state.open
            }
        default:
            return state
    }
}

export default popUpReducer