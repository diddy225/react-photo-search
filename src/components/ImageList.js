import React from 'react'
import '../css/ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  const images = props.pics.map((image) => <ImageCard key={image.id} image={image} />)
  return(

    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList