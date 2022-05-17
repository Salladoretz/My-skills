const api1 = 'c701365b9d'
const api2 = '2634528667'
const api3 = '7623e9ed18b9'

const initialState = {
    apiKey: api1 + api2 + api3
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}