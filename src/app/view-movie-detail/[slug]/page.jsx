import Navbar from "@/components/Navbar";
import Star, { StarFive, StarOne } from "@/components/Star";
import Start from "@/components/Star";
import { getMovieById } from "@/service/moviceService";
import React from "react";
const page = async ({ params: { slug } }) => {
    console.log(slug);
    const movieById = await getMovieById(slug);
    console.log(movieById)
    return (
        <>
            <div className="min-h-max bg-red-950 m-10">

                <div class="px-2 py-20 w-full flex justify-center p-8 ">

                    <div class=" lg:mx-8 lg:flex lg:max-w-5xl  rounded-lg p-8">

                        <div class="shadow">
                            <img src={movieById?.payload.image ? movieById?.payload?.image : 'https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg'} alt={movieById.movie_title} />
                        </div>
                        <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none  lg:rounded-lg flex flex-col start-0">
                            <div className="text-white ">
                                <p className="">{movieById?.payload?.director}</p>
                                <span class="text-white">{movieById?.payload?.runtime} minute</span>
                                <p>{movieById?.payload?.rating>=3.8 ?<StarFive/>:<StarOne/>}</p>
                            </div>
                            <div class=" text-white font-bold flex">
                                <div className="line-clamp-1 ">
                                    {movieById?.payload?.movie_title}
                                </div>
                                <div>
                                    (<span>{movieById?.payload?.released_year}</span>)

                                </div>
                            </div>

                            <p className="text-white line-clamp-3">{movieById?.payload?.description}</p>
                            <div className="mt-2 text-white">
                                <p>{movieById?.payload?.posted_at}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )


}

export default page;
