import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'

//  core comps
import ArticleItem from './ArticleItem'

const Articles = () => {
  useEffect(
    () => {
      getArticle()
    },
    // eslint-disable-next-line
    [],
  )

  const [articles, setArticles] = useState([{ multimedia: [] }])

  const getArticle = async () => {
    const items = await axios.get(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rx08UMNqJbQvOJtCC27cxdoj8Ev2pnDH',
    )

    // eslint-disable-next-line no-console
    console.log(items.data.results)
    const { results } = items.data
    setArticles(results)
  }

  return (
    <Fragment>
      <div>
        {articles.map(news => (
          <ArticleItem news={news} />
        ))}
      </div>
    </Fragment>
  )
}

const H1Style = styled.h3`
  color: black;
`

export default Articles
