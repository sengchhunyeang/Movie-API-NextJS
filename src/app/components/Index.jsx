import { getAllmovice } from "@/service/moviceService";
export const Index = async () => {
    const data = await getAllmovice();
    return (
        <>
            <div className="antialiased text-gray-900">
                <div className="bg-red-950  p-8">
                    <div className="overflow-x-scroll scrollbar-hide">
                        <div className=" grid grid-flow-col gap-4">
                            {data.payload?.map(movie => (
                                <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-[300px]">
                                    <img className="h48- w-full object-cover object-center" src={movie.image ? movie.image : 'https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg'} alt={movie.movie_title} />
                                    <div className="p-2">
                                        <h2 className="text-base font-semibold mb-1 line-clamp-1">{movie.movie_title}</h2>
                                        <p className="text-gray-700 line-clamp-2 text-xs">{movie.description}</p>
                                        <div className="mt-2 flex justify-between items-center">
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export const Action = async () => {
    const data = await getAllmovice();

    return (
        <>
            <div className="antialiased text-gray-900">
                <div className="bg-red-950 p-8">
                    <div className="overflow-x-scroll scrollbar-hide">
                        <div className=" grid grid-flow-col gap-4">
                            {data.payload?.filter(movie => movie.genre === "Action").map(movie => (
                                <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-[300px]">
                                    <img className="h-48 w-full object-cover object-center" src={movie.image ? movie.image : 'https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg'} alt={movie.movie_title} />
                                    <div className="p-2">
                                        <h2 className="text-base font-semibold mb-1 line-clamp-1">{movie.movie_title}</h2>
                                        <p className="text-gray-700 line-clamp-2 text-xs">{movie.description}</p>
                                        <div className="mt-2 flex justify-between items-center">
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export const Drama = async () => {
    const data = await getAllmovice();

    return (
        <>
            <div className="antialiased text-gray-900">
                <div className="bg-red-950 p-8">
                    <div className="overflow-x-scroll scrollbar-hide">
                        <div className=" grid grid-flow-col gap-4">
                            {data.payload?.filter(movie => movie.genre === "Drama").map(movie => (
                                <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-[300px]">
                                    <img className="h-48 w-full object-cover object-center" src={movie.image ? movie.image : 'https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg'} alt={movie.movie_title} />
                                    <div className="p-2">
                                        <h2 className="text-base font-semibold mb-1 line-clamp-1">{movie.movie_title}</h2>
                                        <p className="text-gray-700 line-clamp-2 text-xs">{movie.description}</p>
                                        <div className="mt-2 flex justify-between items-center">
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export const Anime = async () => {
    const data = await getAllmovice();

    return (
        <>
            <div className="antialiased text-gray-900">
                <div className="bg-red-950 p-8">
                    <div className="overflow-x-scroll scrollbar-hide">
                        <div className=" grid grid-flow-col gap-4">
                            {data.payload?.filter(movie => movie.genre === "Anime").map(movie => (
                                <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-[300px]">
                                    <img className="h-48 w-full object-cover object-center" src={movie.image ? movie.image : 'https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg'} alt={movie.movie_title} />
                                    <div className="p-2">
                                        <h2 className="text-base font-semibold mb-1 line-clamp-1">{movie.movie_title}</h2>
                                        <p className="text-gray-700 line-clamp-2 text-xs">{movie.description}</p>
                                        <div className="mt-2 flex justify-between items-center">
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
// Science Fiction
export const Science = async () => {
    const data = await getAllmovice();

    return (
        <>
            <div className="antialiased text-gray-900">
                <div className="bg-red-950 p-8">
                    <div className="overflow-x-scroll scrollbar-hide">
                        <div className=" grid grid-flow-col gap-4">
                            {data.payload?.filter(movie => movie.genre === "Science Fiction").map(movie => (
                                <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-[300px]">
                                    <img className="h-48 w-full object-cover object-center" src={movie.image ? movie.image : 'https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg'} alt={movie.movie_title} />
                                    <div className="p-2">
                                        <h2 className="text-base font-semibold mb-1 line-clamp-1">{movie.movie_title}</h2>
                                        <p className="text-gray-700 line-clamp-2 text-xs">{movie.description}</p>
                                        <div className="mt-2 flex justify-between items-center">
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}