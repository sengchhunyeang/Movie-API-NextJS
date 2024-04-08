export const Index = async () => {
    const res = await fetch(`https://movie-api-295p.vercel.app/api`);
    const data = await res.json();
    // console.log(data)
    return (
        <>
            <div className="font-bold text-white m-2">
                <h1>All Movie </h1>
            </div>
            <div class="antialiased text-gray-900 ">
                <div class="bg-red-950 min-h-screen p-8  ">
                    <div class="bg-white rounded-lg  shadow-2xl w-full grid grid-cols-4  gap-4 overflow-x-auto ">
                        {data.payload.map(movie => (
                            <div key={movie.id} className="bg-white rounded-lg  shadow-xl">
                                <img class="h-64 w-full object-cover object-center" src={movie.image} alt="Home in Countryside" />
                                <div class="p-6">
                                    <div class="flex items-baseline">
                                    </div>
                                    <h4 class="mt-2 font-semibold text-lg leading-tight truncate">{movie.movie_title}</h4>

                                    <div class="mt-1">
                                        <span className="line-clamp-2">{movie.description}</span>
                                        
                                    </div>
                                    <div class="mt-2 flex items-center">

                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <img class="h-48 w-full object-cover object-end" src={movie.image} alt="Home in Countryside" /> */}

                    </div>
                </div>
            </div>

        </>
    );
}