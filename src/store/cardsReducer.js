import {
    UilClock,
    UilUsdSquare,
    UilSmileBeam
} from '@iconscout/react-unicons'

const initialState = {
    cards: [
        {
            id: 1,
            title: 'Работа',
            color: {
                background: 'linear-gradient(180deg, #FFD700 0%, #F4BB44 100%)',
                boxshadow: '0px 10px 20px 0px #FAFA33'
            },
            barValue: 80,
            value: '30 часов',
            png: UilClock,
            series: [{
                name: 'Часы',
                data: [0, 6, 6, 3, 6, 6, 3]
            }]
        },
        {
            id: 2,
            title: 'Доход',
            color: {
                background: 'linear-gradient(180deg, #6359f0 0%, #2c42b9 100%)',
                boxshadow: '0px 10px 20px 0px #3e6ef3'
            },
            barValue: 80,
            value: '15 000 рублей',
            png: UilUsdSquare,
            series: [{
                name: 'Доходы',
                data: [0, 3000, 3000, 1500, 3000, 3000, 1500]
            }]
        },
        {
            id: 3,
            title: 'Удовлетворение',
            color: {
                background: 'linear-gradient(180deg, #59f059 0%, #0aa82c 100%)',
                boxshadow: '0px 10px 20px 0px #80f593'
            },
            barValue: 110,
            value: '110 %',
            png: UilSmileBeam,
            series: [{
                name: 'Расходы',
                data: [110, 100, 120, 100, 120, 110, 110]
            }]
        }],

    chartOptions: {
        chart: {
            type: 'area',
            height: 'auto'
        },
        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.35
        },
        fill: {
            color: ['#fff'],
            type: 'gradient'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            colors: ['white']
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        grid: {
            show: true
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2022-06-19T00:00:00:000Z',
                '2022-06-20T00:00:00:000Z',
                '2022-06-21T00:00:00:000Z',
                '2022-06-22T00:00:00:000Z',
                '2022-06-23T00:00:00:000Z',
                '2022-06-24T00:00:00:000Z',
                '2022-06-25T00:00:00:000Z',
            ]
        }
    }
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}