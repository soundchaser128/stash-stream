import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {useState} from "react"
import {HiChevronDown, HiChevronUp} from "react-icons/hi2"
import {useHotkeys} from "react-hotkeys-hook"
import {animated, useSpring} from "@react-spring/web"
import {useGesture} from "@use-gesture/react"
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

const videoStyles = "w-screen h-screen absolute top-0 left-0"

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
  const video = data?.findScenes.scenes[currentSceneIndex]
  const length = data?.findScenes.scenes.length || 0
  const streamUrl = addApiKey(`${stashUrl}/scene/${video?.id}/stream`)
  const [showNextVideo, setShowNextVideo] = useState(false)
  const [showPreviousVideo, setShowPreviousVideo] = useState(false)
  const previousVideo = data?.findScenes.scenes[currentSceneIndex - 1]
  const nextVideo = data?.findScenes.scenes[currentSceneIndex + 1]
  const previousStreamUrl = addApiKey(
    `${stashUrl}/scene/${previousVideo?.id}/stream`
  )
  const nextStreamUrl = addApiKey(`${stashUrl}/scene/${nextVideo?.id}/stream`)
  const [springs, api] = useSpring(() => ({
    from: {y: 0},
    config: {
      duration: 500,
    },
  }))

  // const bind = useGesture({
  //   onDrag: ({delta: [, dy]}) => {
  //     setPosition((p) => Math.min(0, p + dy))
  //     if (Math.abs(position + dy) > window.innerHeight) {
  //       goToNextVideo(-position)
  //     }
  //   },
  // })

  const goToNextVideo = () => {
    api.start({
      from: {y: 0},
      to: {y: -window.innerHeight},
    })
    setShowNextVideo(true)
    window.setTimeout(() => {
      setShowNextVideo(false)
      setCurrentSceneIndex((currentSceneIndex + 1) % length)
    }, 500)
  }

  const goToPreviousVideo = () => {
    api.start({
      from: {y: 0},
      to: {y: window.innerHeight},
    })
    setShowPreviousVideo(true)
    window.setTimeout(() => {
      setShowPreviousVideo(false)
      setCurrentSceneIndex(Math.max((currentSceneIndex - 1) % length, 0))
    }, 500)
  }

  const onScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
  }

  useHotkeys("w", goToPreviousVideo, [currentSceneIndex, length])
  useHotkeys("s", goToNextVideo, [currentSceneIndex, length])

  const onEnded = () => {
    setCurrentSceneIndex((currentSceneIndex + 1) % length)
  }

  return (
    <main onScroll={onScroll} className="h-screen w-screen">
      <div className="relative h-full w-full">
        <div className="absolute top-4 left-4 z-10 text-white text-4xl">
          Stash
        </div>

        <div className="">
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
            <div className="flex flex-row gap-1 truncate text-white text-4xl text-shadow-lg">
              {video?.title || video?.files[0].basename}
            </div>
          </div>
        </div>

        <NavButtons
          currentSceneIndex={currentSceneIndex}
          goToNextVideo={goToNextVideo}
          goToPreviousVideo={goToPreviousVideo}
        />

        <div>
          {showPreviousVideo && (
            <animated.video
              className={videoStyles}
              src={previousStreamUrl}
              muted
              autoPlay
              style={{
                top: 0,
              }}
            />
          )}
          <animated.video
            className={videoStyles}
            src={streamUrl}
            muted
            autoPlay
            onEnded={onEnded}
            style={{
              top: 0,
              ...springs,
            }}
          />
          {showNextVideo && (
            <animated.video
              className={videoStyles}
              src={nextStreamUrl}
              muted
              autoPlay
              style={{
                top: 0,
              }}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default App
