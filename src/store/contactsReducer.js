import {
    UilWhatsapp,
    UilTelegram,
    UilEnvelope,
    UilGithub
} from '@iconscout/react-unicons'

const initialState = [
    {
        icon: UilWhatsapp,
        data: '+7 962 586 7508'
    },
    {
        icon: UilTelegram,
        data: '@Salladoretz'
    },
    {
        icon: UilEnvelope,
        data: 'salladoretz@yandex.ru'
    },
    {
        icon: UilGithub,
        data: 'https://github.com/Salladoretz'
    }
]

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}