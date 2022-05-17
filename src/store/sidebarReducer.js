import {
    UilEstate,
    UilText
} from '@iconscout/react-unicons'

const initialState = [
    {
        icon: UilEstate,
        heading: 'Welcome',
        link: 'my-react-skills'
    },
    {
        icon: UilText,
        heading: 'TypeScript',
        link: 'more'
    }
]

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}