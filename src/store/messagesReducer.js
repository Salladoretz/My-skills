import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

const initialState = {
    message: [{
        img: img1,
        name: 'Иван Иванов',
        message: 'Дед - молодец! Выучил в таком возрасте JavaScript, да ещё и React! Просто топчик!',
        time: '2 часа назад'
    },
    {
        img: img2,
        name: 'Петр Петров',
        message: 'И React, и Redux с хуками, и даже TypeScript?! Респект!!!',
        time: '30 минут назад'
    },
    {
        img: img3,
        name: 'Сидор Сидоров',
        message: 'А вы знали, что если кликнуть на наши сообщения, то их можно отредактировать?',
        time: '25 секунд назад'
    }]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}