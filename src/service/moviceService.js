export const getAllmovice = async () => {
    const res = await fetch(`https://movie-api-295p.vercel.app/api`);
    const data = await res.json();
    return (
        <>
            <div>
                <h2>HelloAPI</h2>
                {data.payload.map(movie => (
                    <li key={movie.id}>
                        <h2>{movie.movie_title}</h2>
                        <p>{movie.released_year}</p>
                        <p>{movie.director}</p>
                        <p>{movie.genre}</p>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </div>
        </>
    );
}


