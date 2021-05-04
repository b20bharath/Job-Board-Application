import { useReducer, useEffect } from 'react'
import axios from 'axios'
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json' : '/positions.json'
const REQUEST = 'request'
const GET_DATA = 'get-data'
const ERROR = 'error'
const NEXT_PAGE = 'next-page'

const reducer = (state, action) => {
    switch(action.type) {
        case REQUEST:
            return { loading: true, jobs: []}
        case GET_DATA:
            return {...state, loading: false, jobs: action.information.jobs}
        case ERROR:
            return {...state, loading: false, error: action.information.error, jobs: []}
        case NEXT_PAGE:
            return {...state, checkNextPage: action.information.checkNextPage}
        default:
            return state
    }
}

export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true})
    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source()
        const cancelToken2 = axios.CancelToken.source()
        dispatch({ type: REQUEST})
        axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: { markdown: true, page, ...params}
        })
        .then(res => {
            console.log(res.data)
            return dispatch({ type: GET_DATA, information: { jobs: res.data }})})
        .catch(e => {
            if(axios.isCancel(e)) return;
            dispatch({ type: ERROR, information: { error: e }})
        })
        axios.get(BASE_URL, {
            cancelToken: cancelToken2.token,
            params: { markdown: true, page: page + 1, ...params}
        })
        .then(res => dispatch({ type: NEXT_PAGE, information: { checkNextPage: res.data.length !== 0 }}))
        .catch(e => {
            if(axios.isCancel(e)) return;
            dispatch({ type: ERROR, information: { error: e }})
        })

        return () => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }
    }, [params, page])

    return state
}