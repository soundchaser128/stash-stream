import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {useState} from "react"
import {HiChevronDown, HiChevronUp} from "react-icons/hi2"
import {useHotkeys} from "react-hotkeys-hook"
import {animated, useTransition} from "@react-spring/web"
import {addApiKey, stashUrl} from "./util"
import {useSearchParams} from "react-router-dom"

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

function NavButtons({
  currentSceneIndex,
  goToPreviousVideo,
  goToNextVideo,
}: {
  currentSceneIndex: number
  goToPreviousVideo: (position?: number) => void
  goToNextVideo: (position?: number) => void
}) {
  return (
    <div className="absolute flex flex-col gap-4 right-2 top-1/2 -translate-y-1/2 z-10">
      <button
        className="rounded-full bg-gray-200 p-2 bg-opacity-50 disabled:opacity-25"
        disabled={currentSceneIndex === 0}
        onClick={() => goToPreviousVideo(0)}
      >
        <HiChevronUp />
      </button>

      <button
        className="rounded-full bg-gray-200 p-2 bg-opacity-50"
        onClick={() => goToNextVideo(0)}
      >
        <HiChevronDown />
      </button>
    </div>
  )
}

const videoStyles = "w-screen h-screen"

function App() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const {data} = useQuery(GET_SCENES, {
    variables: {
      query: query,
      sort: "random",
    },
  })
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
  console.log({currentSceneIndex})
  const length = data?.findScenes.scenes.length || 0

  // const transitionRef = useSpringRef()

  const [transitions, api] = useTransition(currentSceneIndex, () => ({
    // ref: transitionRef,
    keys: null,
    duration: 1000,
    from: {transform: "translate3d(0, 0, 0)"},
    enter: {transform: "translate3d(0, 100%, 0)"},
    leave: {transform: "translate3d(0, -100%, 0)"},
    exitBeforeEnter: true,
  }))

  const goToNextVideo = () => {
    api.start()
    setCurrentSceneIndex((currentSceneIndex + 1) % length)
  }

  const goToPreviousVideo = () => {
    setCurrentSceneIndex(Math.max((currentSceneIndex - 1) % length, 0))
  }

  const onScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
  }

  useHotkeys("w", goToPreviousVideo, [currentSceneIndex, length])
  useHotkeys("s", goToNextVideo, [currentSceneIndex, length])

  return (
    <main onScroll={onScroll} className="h-screen w-screen bg-purple-200">
      <div className="relative h-full w-full">
        {/* <div className="">
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
            <div className="flex flex-row gap-1 truncate text-black text-4xl text-shadow-lg">
              {video?.title || video?.files[0].basename}
            </div>
          </div>
        </div> */}

        <NavButtons
          currentSceneIndex={currentSceneIndex}
          goToNextVideo={goToNextVideo}
          goToPreviousVideo={goToPreviousVideo}
        />

        <div>
          {transitions((style, i) => {
            const src = addApiKey(
              `${stashUrl}/scene/${data?.findScenes.scenes[i]?.id}/stream`
            )
            return (
              <animated.video
                className={videoStyles}
                src={src}
                style={style}
                muted
                autoPlay
                controls
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
