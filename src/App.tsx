import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {addApiKey, stashUrl} from "./util"
import {useNavigate, useSearchParams} from "react-router-dom"
import VideoCarousel from "./carousel"
import {SortDirectionEnum} from "./__generated__/graphql"
import {useMemo} from "react"

const GET_SCENES = gql(`
query GetScenes($filter: FindFilterType, $sceneFilter: SceneFilterType) {
  findScenes(
    filter: $filter,
    scene_filter: $sceneFilter
  ) {
    count
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
  const navigate = useNavigate()

  const {data, loading} = useQuery(GET_SCENES, {
    variables: {
      filter: {
        q: query,
        sort: "date",
        direction: SortDirectionEnum.Desc,
        page: page,
        per_page: 20,
      },
      sceneFilter: {},
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

  const onVideoChange = async (index: number) => {
    searchParams.set("index", index.toString())

    navigate({
      search: `?${searchParams.toString()}`,
    })
  }

  const onNextPage = async () => {
    searchParams.set("page", (page + 1).toString())
    navigate({
      search: `?${searchParams.toString()}`,
    })
  }

  const onPreviousPage = async () => {
    //
  }

  return (
    <main className="h-screen w-screen bg-black">
      <div className="relative h-full w-full">
        <VideoCarousel
          loading={loading}
          videos={videos || []}
          initialIndex={index}
          onVideoChange={onVideoChange}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          page={page}
        />
      </div>
    </main>
  )
}

export default App
