import React, { useReducer, useEffect } from 'react'
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
    try {
      console.log(res.data.results)
      const news = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.API_KEY}`
      );

      dispatch({
        type: GET_ARTICLES,
        payload: news.data.results
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);
 

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
