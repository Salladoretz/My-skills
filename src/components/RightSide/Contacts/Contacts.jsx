import React from "react"
import { useSelector } from "react-redux"
import css from './Contacts.module.css'


const Contacts = () => {

    const contacts = useSelector(state => state.contactsReducer)

    return (
        <div className={css.contacts}>
            <h1>Контакты</h1>
            {contacts.map(contact => {
                return (
                    <div className={css.contact}>
                        <div>
                            <contact.icon />
                        </div>
                        {contact.data}
                    </div>
                )
            })}
        </div >
    )
}

export default Contacts