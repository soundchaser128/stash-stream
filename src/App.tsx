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

function App() {
  const {data} = useQuery(GET_SCENES, {})
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
  const video = data?.findScenes.scenes[currentSceneIndex]
  const length = data?.findScenes.scenes.length || 0
  const streamUrl = `http://localhost:9999/scene/${video?.id}/stream`
  const [showVideo, setShowVideo] = useState(false)
  const [position, setPosition] = useState(0)
  const previousVideo = data?.findScenes.scenes[currentSceneIndex - 1]
  const nextVideo = data?.findScenes.scenes[currentSceneIndex + 1]
  const previousStreamUrl = `http://localhost:9999/scene/${previousVideo?.id}/stream`
  const nextStreamUrl = `http://localhost:9999/scene/${nextVideo?.id}/stream`

  const bind = useGesture({
    onDrag: ({delta: [dx, dy]}) => {
      setPosition((p) => p + dy)
    },
  })

  const goToNextVideo = () => {
    setCurrentSceneIndex((currentSceneIndex + 1) % length)
  }

  const goToPreviousVideo = () => {
    setCurrentSceneIndex(Math.max((currentSceneIndex - 1) % length, 0))
  }

  useHotkeys("up", goToPreviousVideo, [currentSceneIndex, length])
  useHotkeys("down", goToNextVideo, [currentSceneIndex, length])

  const onEnded = () => {
    setCurrentSceneIndex((currentSceneIndex + 1) % length)
  }

  return (
    <main className="h-screen w-screen">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10 text-white text-xl">
          Stash
        </div>

        <div className="absolute flex flex-col gap-4 right-2 top-1/2 -translate-y-1/2 z-10">
          <button
            className="rounded-full bg-gray-200 p-2 bg-opacity-50 disabled:opacity-25"
            disabled={length <= 1 || currentSceneIndex === 0}
            onClick={() =>
              setCurrentSceneIndex(
                Math.max((currentSceneIndex - 1) % length, 0)
              )
            }
          >
            <HiChevronUp />
          </button>

          <button
            className="rounded-full bg-gray-200 p-2 bg-opacity-50"
            onClick={() =>
              setCurrentSceneIndex((currentSceneIndex + 1) % length)
            }
          >
            <HiChevronDown />
          </button>
        </div>
        {position > 0 && currentSceneIndex - 1 > 0 && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <animated.video
              className="w-screen h-screen object-cover absolute top-0 left-0 touch-none"
              src={previousStreamUrl}
              muted
              autoPlay
              style={{
                top: window.innerHeight + position,
              }}
            />
          </div>
        )}
        <animated.video
          {...bind()}
          className="w-screen h-screen object-cover absolute top-0 left-0 touch-none"
          src={streamUrl}
          muted
          autoPlay
          onEnded={onEnded}
          style={{
            top: position,
          }}
        />

        {position < 0 && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <animated.video
              className="w-screen h-screen object-cover absolute top-0 left-0 touch-none"
              src={nextStreamUrl}
              muted
              autoPlay
              style={{
                top: window.innerHeight + position,
              }}
            />
          </div>
        )}
      </div>
    </main>
  )
}

export default App
