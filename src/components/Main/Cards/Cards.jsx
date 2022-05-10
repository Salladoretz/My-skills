import React from "react"
import { CardsData } from "../../../data/Data"
import css from './Cards.module.css'
import Card from "./Card"

const Cards = () => {
    return (
        <div className={css.cards}>
            {CardsData.map((card, id) => {
                return (
                    <div className={css.parentContainer}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards