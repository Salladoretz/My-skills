import { skillsReducer } from './skillsReducer'
import { messagesReducer } from './messagesReducer'
import { contactsReducer } from './contactsReducer'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        skillsReducer,
        messagesReducer,
        contactsReducer
    }
})