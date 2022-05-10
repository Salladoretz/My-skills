import React from "react"
import Cards from "./Cards/Cards.jsx"
import Bottom from "./Bottom/Bottom.jsx"
import css from './Main.module.css'

const Main = () => {
    return (
        <div className={css.main}>
            <div>
                <h1>Филипп Ли</h1>
                <p>Frontend React Developer Junior</p>
            </div>
            <Cards />
            <Bottom />
        </div>
    )
}

export default Main