import React, { useMemo } from 'react'
import css from './flux.module.css'
import { useDispatchTS, useSelectorTS } from '../../../store/hooks.ts'


const Flux: React.FC = () => {

    const dispatch = useDispatchTS()
    const onChange = event => { dispatch({ type: 'INPUT_FLUX', payload: event.target.value }) }

    const fluxText: string = useSelectorTS(state => state.fluxReducer.text)
    const exclamationText = useMemo(() => { return fluxText.toUpperCase().split('').map(item => `${item} ! `) }, [fluxText])
    const reverseText = useMemo(() => { return fluxText.split('').reverse().join('') }, [fluxText])

    return (
        <div className={css.flux}>
            <h1>FLUX</h1>
            <div className={css.typescripted}>TypeScripted</div>
            <input
                type='text'
                onChange={onChange}
                value={fluxText} />
            <div className={css.result}>
                <span>{fluxText}</span>
                <span>{exclamationText}</span>
                <span>{reverseText}</span>
            </div>
        </div>
    )
}

export default Flux