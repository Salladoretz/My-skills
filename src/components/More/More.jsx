import React from 'react'
import FluxTS from './Flux/FluxTS.tsx'
import ReactHookFormTS from './Forms/ReactHookForm.tsx'
import PaginationTS from './Pagination/PaginationTS.tsx'
import API_TS from './API/API_TS.tsx'
import css from './More.module.css'

const More = () => {
    return (
        <div className={css.more}>
            <FluxTS />
            <ReactHookFormTS />
            <PaginationTS />
            <API_TS />
        </div>
    )
}

export default More