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
      <div className='card-img-title'>

        <div className='card-pelicula'>
          <img src={image} alt={title} className='img-pelicula' />
        </div>

        <p className='titulo-movie'>{title}</p>

    </div>      
    </Link>
  )
}

export default MovieCard


// .card-pelicula {
//   background: rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   width: 97px;
//   height: 175px;
//   color: white;
//   text-align: center;
//   flex-shrink: 0;
//   padding: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// }

// .img-pelicula {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 10px;
// }