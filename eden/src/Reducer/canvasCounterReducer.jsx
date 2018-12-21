const initialState = {
    paysageCounter: 0,
    fleurCounter: 7
}

export function canvasCounterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT_PAYSAGE":
            return {
                ...state,
                paysageCounter: state.paysageCounter + 1
            }
        case "INCREMENT_FLEUR":
            return {
                ...state,
                fleurCounter: state.fleurCounter + 1
            }
        case "DECREMENT_FLEUR":
            return {
                ...state,
                fleurCounter: state.fleurCounter - 1
            }
        default:
            return state
    }
}



export default canvasCounterReducer