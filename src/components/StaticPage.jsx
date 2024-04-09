import React from 'react'
import { Action, Anime, Drama, Index, Science } from './Index'
import Navbar from './Navbar'
const StaticPage = () => {
  return (
    <>


      <div >
        <Navbar />
      </div>
      <div className='bg-red-950 m-2 '>
        <div className="font-bold text-white m-2">

          <h1 className="text-2xl flex">All Movies &gt;</h1>
        </div>

        <Index />


        <div className="font-bold text-white m-2">
          <h1 className="text-2xl">Action Movie &gt;</h1>
        </div>
        <Action />
        <div className="font-bold text-white m-2">
          <h1 className="text-2xl">Drama Movie &gt;</h1>
        </div>
        <Drama />
        <div className="font-bold text-white m-2">
          <h1 className="text-2xl">Anime Movie &gt;</h1>
        </div>
        <Anime />
        <div className="font-bold text-white m-2">
          <h1 className="text-2xl">Science Fiction &gt;</h1>
        </div>
        <Science />
      </div>



    </>
  )
}

export default StaticPage