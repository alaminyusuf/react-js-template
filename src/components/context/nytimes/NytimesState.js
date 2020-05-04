import React, { useReducer } from 'react'
import axios from 'axios'
import NytimesContext from './nytimesContext'
import NytimesReducer from './nytimesReducer'

import { GET_ARTICLES } from '../types'

const NytimesState = props => {
  const initialState = {
    // article: {},
    articles: [],
  }

  const [state, dispatch] = useReducer(NytimesReducer, initialState)

  // get articles
  const getArticles = async () => {
    const items = await axios.get(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rx08UMNqJbQvOJtCC27cxdoj8Ev2pnDH',
    )
    
    console.log(items.data)
    dispatch({
      type: GET_ARTICLES,
      payload: items.data
    })
  }
  // }

  return (
    <NytimesContext.Provider
      value={{
        articles: state.articles,
        getArticles,
      }}
    >
      {props.children}
    </NytimesContext.Provider>
  )
    }

export default NytimesState
