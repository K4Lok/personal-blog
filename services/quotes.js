export const getQuoteImage = async (width, height, keyword) => {
    const API = process.env.NEXT_PUBLIC_QUOTE_IMAGE_API
    //Keyword: sky,fantastic

    let image_url
    try {
        const image = await fetch(`${API}/${width}x${height}?${keyword}`)
        image_url = image.url

        if (!image_url) throw "Image Url not found!"
    }
    catch {
        image_url = '/quote_fallback.webp'
    }

    return image_url
}

export const getQuote = async () => {
    const API = process.env.NEXT_PUBLIC_QUOTE_API

    let quote

    try {
        const raw = await fetch(API)
        quote = await raw.json()
    }
    catch {
        quote = {
            content: 'All our dreams can come true, if we have the courage to pursue them.',
            author: 'Walt Disney'
        }
    }

    return quote
}