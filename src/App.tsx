import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {useState} from "react"
import {HiChevronDown, HiChevronUp} from "react-icons/hi2"
import {useHotkeys} from "react-hotkeys-hook"
import {useSpring, animated} from "react-spring"
import {useGesture} from "@use-gesture/react"

const GET_SCENES = gql(`
query GetScenes {
  findScenes {
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
        disabled={length <= 1 || currentSceneIndex === 0}
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

function App() {
  const {data} = useQuery(GET_SCENES, {})
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
  const video = data?.findScenes.scenes[currentSceneIndex]
  const length = data?.findScenes.scenes.length || 0
  const streamUrl = `http://localhost:9999/scene/${video?.id}/stream`
  const [position, setPosition] = useState(0)
  const previousVideo = data?.findScenes.scenes[currentSceneIndex - 1]
  const nextVideo = data?.findScenes.scenes[currentSceneIndex + 1]
  const previousStreamUrl = `http://localhost:9999/scene/${previousVideo?.id}/stream`
  const nextStreamUrl = `http://localhost:9999/scene/${nextVideo?.id}/stream`

  const bind = useGesture({
    onDrag: ({delta: [, dy]}) => {
      setPosition((p) => Math.min(0, p + dy))
      if (Math.abs(position + dy) > window.innerHeight) {
        goToNextVideo(-position)
      }
    },
  })

  const goToNextVideo = (position?: number) => {
    setCurrentSceneIndex((currentSceneIndex + 1) % length)
    if (typeof position !== "undefined") {
      setPosition(position)
    }
  }

  const goToPreviousVideo = (position?: number) => {
    setCurrentSceneIndex(Math.max((currentSceneIndex - 1) % length, 0))
    if (typeof position !== "undefined") {
      setPosition(position)
    }
  }

  useHotkeys("w", () => goToPreviousVideo(0), [currentSceneIndex, length])
  useHotkeys("s", () => goToNextVideo(0), [currentSceneIndex, length])

  const onEnded = () => {
    setCurrentSceneIndex((currentSceneIndex + 1) % length)
  }

  return (
    <main className="h-screen w-screen">
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

        <div className="touch-none" {...bind()}>
          <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <animated.video
              className="w-screen h-screen object-cover absolute top-0 left-0"
              src={previousStreamUrl}
              muted
              autoPlay
              style={{
                top: window.innerHeight + position,
              }}
            />
          </div>

          <animated.video
            className="w-screen h-screen object-cover absolute top-0 left-0"
            src={streamUrl}
            muted
            autoPlay
            onEnded={onEnded}
            style={{
              top: position,
            }}
          />

          <div className="absolute top-0 left-0 w-screen h-screen">
            <animated.video
              className="w-screen h-screen object-cover absolute top-0 left-0"
              src={nextStreamUrl}
              muted
              autoPlay
              style={{
                top: window.innerHeight + position,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
