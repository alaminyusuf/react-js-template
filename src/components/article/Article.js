// core modules
import React, { useContext } from 'react'

// import context hook
import NytimesContext from '../context/nytimes/nytimesContext'

//  core comps
import ArticleItem from './ArticleItem'

// Init context hook

const Articles = () => {
  const nytimesContext = useContext(NytimesContext)
  const { news } = nytimesContext

  return (
    <div className="text-center grid-2">
      {news.map((news, i) => (
        <ArticleItem news={news} key={i} />
      ))}
    </div>
  )
}

export default Articles
