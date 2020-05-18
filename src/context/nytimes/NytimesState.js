/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import NytimesContext from './nytimesContext'
import NytimesReducer from './nytimesReducer'

import { GET_ARTICLES, SET_LOADING } from '../types'

const NytimesState = props => {
  const initialState = {
    articles: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(NytimesReducer, initialState)

  // get articles
  const getArticles = async () => {
    setLoading()
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`,
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

  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <NytimesContext.Provider
      value={{
        articles: state.news,
        loading: state.loading,
        getArticles,
        setLoading,
      }}
    >
      {props.children}
    </NytimesContext.Provider>
  )
}

export default NytimesState
