const initialState = {
    pageItems: [
        { id: 1, item: 'Овал 1' },
        { id: 2, item: 'Овал 2' },
        { id: 3, item: 'Овал 3' },
        { id: 4, item: 'Овал 4' },
        { id: 5, item: 'Овал 5' },
        { id: 6, item: 'Овал 6' },
        { id: 7, item: 'Овал 7' },
        { id: 8, item: 'Овал 8' },
        { id: 9, item: 'Овал 9' },
        { id: 10, item: 'Овал 10' }
    ],
    currentPage: 1,
    itemsOnPage: 2
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, pageItems: action.payload }
        case 'SET_ITEMS_ON_PAGE':
            return { ...state, itemsOnPage: action.payload }
        case 'DECREMENT_ITEMS_ON_PAGE':
            return { ...state, itemsOnPage: action.payload }
        case 'INCREMENT_ITEMS_ON_PAGE':
            return { ...state, itemsOnPage: action.payload }
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload }
        default: return state
    }
}