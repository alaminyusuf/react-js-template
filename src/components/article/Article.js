// core modules
import React, { useEffect, useState, Fragment } from 'react'

// core dependencies
import axios from 'axios'

//  core comps
import ArticleItem from './ArticleItem'

const Articles = () => {
  // useEffect(
  //   () => {
  //     getArticle()
  //   },
  //   // eslint-disable-next-line
  //   [],
  // )

  const [articles, setArticles] = useState([{ multimedia: [] }])

  // const getArticle = async () => {
  //   const items = await axios.get(
  //     'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rx08UMNqJbQvOJtCC27cxdoj8Ev2pnDH',
  //   )

  //   // eslint-disable-next-line no-console
  //   console.log(items.data.results)
  //   const { results } = items.data
    // setArticles(results)
  // }
  // console.log(art)
  return (
    <Fragment>
      <div className="text-center grid-2">
        {articles.map((news, i) => (
          <ArticleItem news={news} key={i} />
        ))}
      </div>
    </Fragment>
  )
}


export default Articles
