import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

const initialState = {
    message: [{
        id: 1,
        img: img1,
        name: 'Иван Иванов',
        message: 'Дед - молодец! Выучил в таком возрасте JavaScript, да ещё и React! Просто топчик!',
        time: '2 часа назад'
    },
    {
        id: 2,
        img: img2,
        name: 'Петр Петров',
        message: 'И React, и Redux с хуками, и даже TypeScript?! Респект!!!',
        time: '30 минут назад'
    },
    {
        id: 3,
        img: img3,
        name: 'Сидор Сидоров',
        message: 'lol kek cheburek :)))',
        time: '25 секунд назад'
    }]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}