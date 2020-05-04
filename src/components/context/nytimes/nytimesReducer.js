/* eslint-disable linebreak-style */
import { GET_ARTICLES } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        article: action.payload,
      }
    // case GET_SINGLE_ARTICLE:
    //   return {
    //     ...state,
    //     article: action.payload,
    //   }

    default:
      return state
  }
}
