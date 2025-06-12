import React from 'react'
import Link from 'next/link'

interface Props {
    title: string;
    image: string;
    genre: string;
    ranking?: number;
}

const RankingCard = ({ title, image, genre, ranking }: Props) => {
    return (
        <>
            <Link href={`/movies/${title}`}>
                <div className='card-img-title'>

                    <div className='card-pelicula-horizontal'>
                        {ranking !== undefined && (
                            <img
                                src={`/ranking/${ranking}.png`}
                                alt={`Ranking ${ranking}`}
                                className='ranking-icon-left'
                            />
                        )}
                        <img src={image} alt={title} className='img-pelicula' />
                    </div>


                    <p className='titulo-movie'>{title}</p>

                </div>
            </Link>
        </>
    )
}

export default RankingCard