import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {addApiKey, stashUrl} from "./util"
import {useSearchParams} from "react-router-dom"
import VideoCarousel from "./carousel"
import {SortDirectionEnum} from "./__generated__/graphql"
import {useMemo} from "react"

const GET_SCENES = gql(`
query GetScenes($sort: String, $direction: SortDirectionEnum, $query: String, $page: Int) {
  findScenes(
    filter: {sort: $sort, direction: $direction, q: $query, page: $page}
  ) {
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
        duration
      }
    }
  }
}`)

const randomPart = Math.floor(Math.random() * 10 ** 8)

function App() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""
  const index = Number(searchParams.get("index")) || 0
  const page = Number(searchParams.get("page")) || 1

  const {data, loading} = useQuery(GET_SCENES, {
    variables: {
      query,
      // sort: "date",
      direction: SortDirectionEnum.Desc,
      sort: `random_${randomPart}`,
      page,
      maxDuration: Number.MAX_SAFE_INTEGER,
    },
  })

  const videos = useMemo(() => {
    return data?.findScenes.scenes.map((video) => {
      const url = addApiKey(`${stashUrl}/scene/${video.id}/stream`)
      const title = video.title || video.files[0].basename
      const date = video.date || undefined
      const performers = video.performers.map((performer) => performer.name)
      const studio = video.studio?.name || undefined
      return {url, title, date, performers, studio}
    })
  }, [data])

  return (
    <main className="h-screen w-screen bg-black">
      <div className="relative h-full w-full">
        <VideoCarousel loading={loading} videos={videos || []} initalIndex={index} />
      </div>
    </main>
  )
}

export default App
