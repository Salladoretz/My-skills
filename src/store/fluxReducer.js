const initialState = {
    text: ''
}

export const fluxReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_FLUX':
            return { ...state, text: action.payload }
        default: return state
    }
}