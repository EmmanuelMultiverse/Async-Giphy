require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const getImage = async (query) => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson["data"]["url"];
}

getImage("cats");