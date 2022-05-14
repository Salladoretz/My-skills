import { skillsReducer } from './skillsReducer'
import { messagesReducer } from './messagesReducer'
import { contactsReducer } from './contactsReducer'
import { cardsReducer } from './cardsReducer'
import { sidebarReducer } from './sidebarReducer'
import { fluxReducer } from './fluxReducer'
import { pageReducer } from './paginationReducer'
import { apiReducer } from './apiReducer'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        skillsReducer,
        messagesReducer,
        contactsReducer,
        cardsReducer,
        sidebarReducer,
        fluxReducer,
        pageReducer,
        apiReducer
    }
})