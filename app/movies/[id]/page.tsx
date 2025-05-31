import React from 'react'

interface pelicula {
  id: string;
}

const moviepage = async({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <>  
      <div>moviepage: {id}</div>
    </>
  )
}

export default moviepage
