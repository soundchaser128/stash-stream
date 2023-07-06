export const apiKey = import.meta.env.VITE_API_KEY
export const stashUrl = import.meta.env.VITE_STASH_URL

export const addApiKey = (url: string) => {
  if (apiKey) {
    const parsedUrl = new URL(url)
    parsedUrl.searchParams.append("apikey", apiKey)
    return parsedUrl.toString()
  } else {
    return url
  }
}
