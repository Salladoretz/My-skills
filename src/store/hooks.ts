import { store } from './reducers'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch


export const useDispatchTS = () => useDispatch<AppDispatch>()
export const useSelectorTS: TypedUseSelectorHook<RootState> = useSelector