import {
    UilTelegramAlt,
    UilEnvelope,
    UilGithubAlt
} from '@iconscout/react-unicons'

const initialState = [
    {
        icon: UilTelegramAlt,
        data: '@Salladoretz'
    },
    {
        icon: UilEnvelope,
        data: 'salladoretz@yandex.ru'
    },
    {
        icon: UilGithubAlt,
        data: 'https://github.com/Salladoretz'
    }
]

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}