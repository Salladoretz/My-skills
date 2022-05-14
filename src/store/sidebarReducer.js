import {
    UilEstate,
    UilChannelAdd,
} from '@iconscout/react-unicons'

const initialState = [
    {
        icon: UilEstate,
        heading: 'Welcome',
        link: '/'
    },
    {
        icon: UilChannelAdd,
        heading: 'More stuff',
        link: 'more'
    }
]

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}