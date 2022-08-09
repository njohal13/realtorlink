import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '22928f752bmshd0ff2f39b0aeaa7p17d0e2jsn68eec1d243d0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}

