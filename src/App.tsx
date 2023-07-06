import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import debounce from "lodash.debounce"
import {addApiKey, stashUrl} from "./util"
import {useNavigate, useSearchParams} from "react-router-dom"
import VideoCarousel from "./carousel"
import {useCallback, useState} from "react"

const GET_SCENES = gql(`
query GetScenes($sort: String, $direction: SortDirectionEnum, $query: String) {
  findScenes(filter: {sort: $sort, direction: $direction, q: $query}) {
  	scenes {
      id
      date
      performers {
        name
      }
      studio {
        name
      }
      title
      files {
        basename
      }
    }
  }
}`)

const randomPart = Math.floor(Math.random() * 10 ** 8)

function App() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const {data, loading} = useQuery(GET_SCENES, {
    variables: {
      query: query,
      sort: `random_${randomPart}`,
    },
  })
  const navigate = useNavigate()
  const videos = data?.findScenes.scenes.map((video) => {
    const url = addApiKey(`${stashUrl}/scene/${video.id}/stream`)
    const title = video.title || video.files[0].basename
    const date = video.date || undefined
    const performers = video.performers.map((performer) => performer.name)
    const studio = video.studio?.name || undefined
    return {url, title, date, performers, studio}
  })

  const setQueryInUrl = (query: string) => {
    console.log("calling debounced fn with", query)
    navigate(`?q=${encodeURIComponent(query)}`)
  }

  const setQueryInUrlDebounced = debounce(setQueryInUrl, 500)

  const setQueryInUrlAndState = useCallback((query: string) => {
    setQuery(query)
    setQueryInUrlDebounced(query)
  }, [])

  return (
    <main className="h-screen w-screen bg-black">
      <div className="relative h-full w-full">
        <VideoCarousel
          loading={loading}
          videos={videos || []}
          onQueryChange={(query) => setQueryInUrlAndState(query)}
          query={query}
        />
      </div>
    </main>
  )
}

export default App
