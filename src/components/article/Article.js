// core modules
import React, { useEffect, useContext } from 'react'

// import context hook
import NytimesContext from '../../context/nytimes/nytimesContext'

//  core comps
import ArticleItem from './ArticleItem'
import Loader from '../layout/Loader'

// Init context hook

const Articles = ({ match }) => {
  console.log(match)
  const nytimesContext = useContext(NytimesContext)
  const { articles, loading } = nytimesContext

  useEffect(() => {
    getArticles(match)
  },
  // eslint-disable-next-line
  [])


  if (loading) <Loader />

  return (
    <div className="text-center grid-2">
      {articles.map((news, i) => (
        <ArticleItem news={news} key={i} />
      ))}
    </div>
  )
}

export default Articles
