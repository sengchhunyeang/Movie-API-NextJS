export const getAllmovice = async () => {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api`,{
        cache:'no-store'
    }
       
    );
    const data = await res.json();
    return data;
}


// https://movie-api-get-only-bmc3.vercel.app/api
// https://express-api-movie.onrender.com/