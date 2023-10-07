

export const getGifs = async (searchCategory ) => {

    const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=nhUnJX58WghnnD0Typ0IAYQClGSwrHpU&q=${ searchCategory }&limit=10`;

    const resp = await fetch(endPoint);
    const { data } = await resp.json();

    const gifs = data.map( gif => ( {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    } ));
    console.log( gifs );
    return gifs;
}





