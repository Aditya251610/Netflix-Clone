import axios from 'axios'

export const fetchFromMovieAPI = async (url) => {
    const options = {
        hostname: 'streaming-availability.p.rapidapi.com',
        port: null,
        path: '/shows/%7Bid%7D?series_granularity=episode&output_language=en',
        headers: {
            'x-rapidapi-key': 'fb95ab63ecmsh5a54461b61e0dc9p1f98dfjsnaac9ac348183',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    };

    const response = await axios.get(url, options)

    if(response.status !== 200){
        throw new Error('Failed to fetch movie.'+ response.statusText)
    }

    return response.data
}