import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {debounce} from "ts-debounce"
import {addApiKey, stashUrl} from "./util"
import {useNavigate, useSearchParams} from "react-router-dom"
import VideoCarousel from "./carousel"

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

function App() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""
  const {data, loading} = useQuery(GET_SCENES, {
    variables: {
      query: query,
      sort: "random",
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

  const setQuery = debounce((query: string) => {
    navigate(`?q=${encodeURIComponent(query)}`)
  }, 500)

  return (
    <main className="h-screen w-screen bg-purple-200">
      <div className="relative h-full w-full">
        <VideoCarousel
          loading={loading}
          videos={videos || []}
          onQueryChange={(query) => setQuery(query)}
        />
      </div>
    </main>
  )
}

export default App
