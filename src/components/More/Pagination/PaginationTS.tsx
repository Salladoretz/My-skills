import React from 'react'
import css from './Pagination.module.css'
import { useDispatchTS, useSelectorTS } from '../../../store/hooks.ts'
import { Pagination as PG } from '@mui/material'

type Item = {
    id: number,
    item: string
}

const PaginationTS: React.FC = () => {

    const dispatch = useDispatchTS()
    const items: Item[] = useSelectorTS(state => state.pageReducer.pageItems)
    const currentPage: number = useSelectorTS(state => state.pageReducer.currentPage)
    const itemsOnPage: number = useSelectorTS(state => state.pageReducer.itemsOnPage)

    const totalPages = Math.ceil(items.length / itemsOnPage)
    const lastItemIndex = currentPage * itemsOnPage
    const firstItemIndex = lastItemIndex - itemsOnPage
    const currentItems = items.slice(firstItemIndex, lastItemIndex)

    const setItemOnPage = event => {
        let siop = parseInt(event.target.value)
        dispatch({ type: 'SET_ITEMS_ON_PAGE', payload: siop })
    }

    const decrementItemsOnPage = () => {
        dispatch({ type: 'DECREMENT_ITEMS_ON_PAGE', payload: itemsOnPage - 1 })
    }

    const incrementItemsOnPage = () => {
        if (itemsOnPage < 15) {
            dispatch({ type: 'INCREMENT_ITEMS_ON_PAGE', payload: itemsOnPage + 1 })
        }
    }

    const addItem = () => {
        let newItem: Item = { id: items.length + 1, item: `Овал ${items.length + 1}` }
        let newItems = [...items, newItem]
        dispatch({ type: 'ADD_ITEM', payload: newItems })
    }


    return (
        <div className={css.pagination}>
            <h1>PAGINATION</h1>
            <main className={css.main}>
                <div className={css.label}>Количество овалов на странице (max: 15)</div>
                <div className={css.controls}>
                    <button
                        className={css.button1}
                        onClick={() => decrementItemsOnPage()}
                    >-</button>
                    <input
                        className={css.input}
                        value={itemsOnPage}
                        onChange={setItemOnPage}
                    />
                    <button
                        className={css.button1}
                        onClick={() => incrementItemsOnPage()}>+</button>

                </div>
                <button
                    className={css.addButton}
                    onClick={() => addItem()}>Добавить овал</button>

                <div className={css.wrapper}>
                    {currentItems.map(i =>
                        <div
                            key={i.id}
                            className={css.item}
                        >
                            {i.item}
                        </div>
                    )}
                </div>
                <PG
                    count={totalPages}
                    page={currentPage}
                    showFirstButton
                    showLastButton
                    onChange={(_, page) => dispatch({ type: 'SET_PAGE', payload: page })}
                />
            </main>
        </div>
    )
}


export default PaginationTS