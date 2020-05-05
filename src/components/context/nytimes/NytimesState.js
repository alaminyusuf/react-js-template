import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import NytimesContext from './nytimesContext'
import NytimesReducer from './nytimesReducer'

import { GET_ARTICLES } from '../types'

const NytimesState = props => {
  const initialState = {
    news: [],
  }

  const [state, dispatch] = useReducer(NytimesReducer, initialState)

  // get articles
  const getArticles = async () => {
    try {
      const res = await axios.get(
        'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rx08UMNqJbQvOJtCC27cxdoj8Ev2pnDH',
      )

      dispatch({
        type: GET_ARTICLES,
        payload: res.data.results,
      })
      console.log(res.data.results)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(
    () => {
      getArticles()
    },
    // eslint-disable-next-line
    [],
  )

  return (
    <NytimesContext.Provider
      value={{
        news: state.news,
        // getArticles,
      }}
    >
      {props.children}
    </NytimesContext.Provider>
  )
}

export default NytimesState
