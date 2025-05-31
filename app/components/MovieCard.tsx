import React from 'react'
import Link from 'next/link'

interface Props {
  title: string;
  image: string;
  genre: string;
}

const MovieCard = ({ title, image, genre }: Props) => {
  return (
    <Link href={`/movies/${title}`}>
    <div className='card-pelicula'>
      <img src={image} alt={title} className='img-pelicula' />
      <h3>{title}</h3>
      <p>{genre}</p>
    </div>
    </Link>
  )
}

export default MovieCard
