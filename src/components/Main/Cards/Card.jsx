import React, { useState } from "react"
import { AnimateSharedLayout, motion } from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar'
import { UilTimes } from '@iconscout/react-unicons'
import { ChartOptions } from "../../../data/Data"
import Chart from 'react-apexcharts'
import 'react-circular-progressbar/dist/styles.css'
import css from './Card.module.css'
import './custom.css'

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

    return (
        <AnimateSharedLayout>
            {expanded
                ? <ExpandedCard
                    param={props}
                    setExpanded={() => setExpanded(false)} />
                : <CompactCard
                    param={props}
                    setExpanded={() => setExpanded(true)} />}
        </AnimateSharedLayout>
    )
}

function CompactCard({ param, setExpanded }) {
    const Png = param.png
    return (
        <motion.div className={css.compactCard}
            style={{
                background: param.color.background,
                boxShadow: param.color.boxshadow
            }}
            onClick={setExpanded}
            layoutId='expandableCard'
        >
            <div className={css.radialBar}>
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className={css.detail}>
                <Png />
                <span>{param.value}</span>
                <span>Последние 7 дней</span>
            </div>
        </motion.div>
    )
}

function ExpandedCard({ param, setExpanded }) {

    return (
        <motion.div className={css.expandedCard}
            style={{
                background: param.color.background,
                boxShadow: param.color.boxshadow
            }}
            layoutId='expandableCard'
        >
            <div style={{
                alignSelf: 'flex-end',
                cursor: 'pointer',
                color: 'white'
            }}>
                <UilTimes
                    onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className={css.chartContainer}>
                <Chart
                    series={param.series}
                    type='area'
                    options={ChartOptions.options}
                />
            </div>
            <span>Последние 24 часа</span>
        </motion.div >
    )
}

export default Card