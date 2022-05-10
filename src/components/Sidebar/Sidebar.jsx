import React, { useState } from "react"
import LogoTop from '../../imgs/logoReact.png'
import Lee from '../../imgs/Lee.png'
import css from './Sidebar.module.css'
import { SidebarData } from "../../data/Data"
import { UilBars, UilSignOutAlt } from '@iconscout/react-unicons'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }

    return (
        <>
            <div
                className={css.bar}
                style={expanded ? { left: '60%' } : { left: '5%' }}
                onClick={() => setExpanded(!expanded)}
            >
                <UilBars />
            </div>
            <motion.div
                className={css.sidebar}
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                <div className={css.logoTop}>
                    <img src={LogoTop} alt="" />
                </div>
                <div className={css.menu}>
                    {SidebarData.map((item, index) => {
                        return (
                            <div className={index === selected
                                ? css.menuItem + ' ' + css.active
                                : css.menuItem}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <Link to={item.link}>
                                    <item.icon />
                                </Link>
                                <Link to={item.link}>
                                    <span>
                                        {item.heading}
                                    </span>
                                </Link>
                            </div>
                        )
                    })}
                    <div className={css.logoBottom}>
                        <img src={Lee} alt="" />
                    </div>
                    <div className={css.menuItem}>
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div >
        </>
    )
}

export default Sidebar