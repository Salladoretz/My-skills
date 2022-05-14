import React from 'react'
import css from './Cards.module.css'
import Card from './Card'
import { useSelector } from 'react-redux'

const Cards = () => {

    const cards = useSelector(state => state.cardsReducer.cards)
    const chartOptions = useSelector(state => state.cardsReducer.chartOptions)

    return (
        <div className={css.cards}>
            {cards.map((card, id) => {
                return (
                    <div className={css.parentContainer}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                            chartOptions={chartOptions}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards