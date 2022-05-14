export const SET_CURRENT_SKILL = 'skills/SET_CURRENT_SKILL'
export const SET_DROP_SKILL = 'skills/SET_DROP_SKILL'
export const SET_SKILL_LIST = 'skills/SET_SKILL_LIST'


const initialState = {
    skillList: [
        { id: 1, order: 1, skillName: 'JavaScript' },
        { id: 2, order: 2, skillName: 'HTML' },
        { id: 3, order: 3, skillName: 'CSS' },
        { id: 4, order: 4, skillName: 'React' },
        { id: 5, order: 5, skillName: 'Redux' },
        { id: 6, order: 6, skillName: 'TypeScript' }
    ],
    currentSkill: {},
    dropSkill: {},
}


export const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SKILL:
            return { ...state, currentSkill: action.payload }
        case SET_DROP_SKILL:
            return { ...state, dropSkill: action.payload }
        case SET_SKILL_LIST:
            return { ...state, skillList: action.payload }
        default: return state
    }
}