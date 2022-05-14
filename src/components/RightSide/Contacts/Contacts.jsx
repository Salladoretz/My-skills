import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { UilTimes } from '@iconscout/react-unicons'
import css from './Contacts.module.css'


const Contacts = () => {

    const contacts = useSelector(state => state.contactsReducer)
    const [expanded, setExpanded] = useState(false)

    return (
        <AnimateSharedLayout>
            {expanded
                ? <ExpandedCard
                    param={contacts}
                    setExpanded={() => setExpanded(false)} />
                : <CompactCard
                    param={contacts}
                    setExpanded={() => setExpanded(true)} />}
        </AnimateSharedLayout>
    )
}

function CompactCard({ param, setExpanded }) {
    return (
        <motion.div className={css.compactContacts}
            onClick={setExpanded}
            layoutId='expandableCard'
        >
            <div className={css.detail}>
                {param.map(contact => {
                    return (<div
                        className={css.contact}>
                        <div><contact.icon /></div>
                        {contact.data}</div>)
                })}
            </div>
        </motion.div>
    )
}

function ExpandedCard({ param, setExpanded }) {

    return (
        <motion.div className={css.expandedContacts}
            layoutId='expandableCard'
        >
            <div className={css.expandedContacts__cross}>
                <UilTimes
                    onClick={setExpanded} />
            </div>
            <div>
                {param.map(contact => {
                    return (
                        <div className={css.contact}>
                            <div><contact.icon /></div>
                            {contact.data}
                        </div>
                    )
                })}
            </div>
        </motion.div >
    )
}


export default Contacts