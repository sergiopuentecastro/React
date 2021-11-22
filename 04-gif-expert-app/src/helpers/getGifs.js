export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uqiMKRJBRZcn6E06APgg5ZKfQpd3IykI`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            title: img.title,
            id: img.id,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}