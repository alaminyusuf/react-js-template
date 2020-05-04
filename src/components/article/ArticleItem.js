// core modules
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const ArticleItem = ({ news }) => {
  const media = news.multimedia.map(img => img)
  const img = media.map((img, index) => {
    return img.url
  })
  // console.log(img)
  return (
    <Fragment>
    <Link to={news.url}>
      <img src={img[4]}  height='250px' />
      <h1 >{news.title}</h1>
      </Link>
    </Fragment>
  )
}



export default ArticleItem
