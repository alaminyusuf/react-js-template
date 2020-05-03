/* eslint-disable array-callback-return */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Articles = () => {
  useEffect(
    () => {
      getArticle()
    },
    // eslint-disable-next-line
    [],
  )

  const [articles, setArticles] = useState([ {multimedia: []} ])

  const getArticle = async () => {
    const articles = await axios.get(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rx08UMNqJbQvOJtCC27cxdoj8Ev2pnDH',
    )

    // eslint-disable-next-line no-console
    console.log(articles.data.results)
    const { results } = articles.data
    setArticles(results)
  }

  return (
    <div>
      {articles.map(({ title, multimedia, uri }) => (
        <div className="card text-center">
          {multimedia.map(({uri})) => {
            <img src={url} alt="image"/>

            console.log(url)
          })}
          <h3 style={h1Style} key={uri}>
            {title}
          </h3>
        </div>
      ))}
    </div>
  )
}


const h1Style = { color: 'black' }

export default Articles
