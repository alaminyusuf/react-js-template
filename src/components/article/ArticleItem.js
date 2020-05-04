import React from 'react'

const ArticleItem = ({ news }) => {
  const media = news.multimedia.map(img => img)
  const img = media.map((img, index) => {
    return img.url
  })
  console.log(img)
  return (
    <div>
      <img src={img[0]} />
      <h1>{news.title}</h1>
    </div>
  )
}

export default ArticleItem
