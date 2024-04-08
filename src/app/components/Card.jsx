import React from 'react'

const Card = () => {
    return (
        <>
       
            <div class=" max-w-xs bg-white border border-gray-200 rounded-lg shadow p-4">
                <a href="#">
                    <img class="rounded-t-lg" src="/images/koreanMovie.jpg" alt="" />

                </a>
                <div className='title text-black  m-2'>
                    title movie
                </div>
                <div class="">
                    <h5>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </h5>

                </div>
            </div>

        </>
    )
}

export default Card