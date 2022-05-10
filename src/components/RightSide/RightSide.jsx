import React from "react"
import Contacts from "./Contacts/Contacts"
import Messages from "./Messages/Messages.jsx"
import css from './RightSide.module.css'

const RightSide = () => {
    return (
        <div className={css.rightSide}>
            <div>
                <Messages />
            </div>
            <div>
                <Contacts />
            </div>
        </div>
    )
}

export default RightSide