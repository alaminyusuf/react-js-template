/* eslint-disable linebreak-style */
import { GET_ARTICLES, SET_LOADING } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        article: action.payload,
      }
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        }
    default:
      return state
  }
}
