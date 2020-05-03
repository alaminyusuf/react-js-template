/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react'
import axios from 'axios'
import NytimesContext from './nytimesContext'
import NytimesReducer from './nytimesReducer'

import { GET_ARTICLES, GET_SINGLE_ARTICLE } from '../types'

const NytimesState = props => {
  const initialState = {
    article: {},
    articles: [],
  }

  const [state, dispatch] = useReducer(NytimesReducer, initialState)

  // get articles
  const getArticles = async text => {
    const res = await axios.get(
      'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=rx08UMNqJbQvOJtCC27cxdoj8Ev2pnDH',
    )
    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    })
    console.log(res.data)
  }

  return (
    <NytimesContext.Provider
      value={{
        article: state.article,
        articles: state.articles,
        getArticles,
      }}
    >
      {props.children}
    </NytimesContext.Provider>
  )
}
