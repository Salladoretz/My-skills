import React from 'react'
import { useSelector } from 'react-redux'
import css from './Messages.module.css'

const Messages = () => {

    const messages = useSelector(state => state.messagesReducer.message)

    return (
        <div className={css.messages}>
            {messages.map((message) => {
                return (
                    <div className={css.item}>
                        <img src={message.img} alt='' />
                        <div className={css.message}>
                            <div className={css.messageBlock}>
                                <span>{message.name}</span>
                            </div>
                            <div>
                                <span>{message.message}</span>
                            </div>
                            <div className={css.time}>
                                <span>{message.time}</span>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Messages