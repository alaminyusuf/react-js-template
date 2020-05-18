/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
// core modules
import React from 'react'

const ArticleItem = ({ news }) => {
  const media = news.multimedia.map(img => img)
  const img = media.map((img, index) => img.url)
  console.log(img)
  return (
    <>
      <a href={news.url}>
        <img src={img[4]} height="250px" />
        <h1>{news.title}</h1>
      </a>
    </>
  )
}

export default ArticleItem
