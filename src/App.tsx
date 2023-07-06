import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {useState} from "react"
import {addApiKey, stashUrl} from "./util"
import {useSearchParams} from "react-router-dom"
import VideoCarousel from "./carousel"

const GET_SCENES = gql(`
query GetScenes($sort: String, $direction: SortDirectionEnum, $query: String) {
  findScenes(filter: {sort: $sort, direction: $direction, q: $query}) {
  	scenes {
      id
      title
      files {
        basename
      }
    }
  }
}`)

function App() {
  const [searchParams] = useSearchParams()
  const [query] = useState(searchParams.get("q") || "")
  const {data} = useQuery(GET_SCENES, {
    variables: {
      query: query,
      sort: "random",
    },
  })
  const videos = data?.findScenes.scenes.map((video) => {
    return addApiKey(`${stashUrl}/scene/${video.id}/stream`)
  })

  if (!videos) {
    return <p>Loading...</p>
  }

  return (
    <main className="h-screen w-screen bg-purple-200">
      <div className="relative h-full w-full">
        <VideoCarousel videos={videos} />
      </div>
    </main>
  )
}

export default App
