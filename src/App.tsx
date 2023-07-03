import {useQuery} from "@apollo/client"
import {gql} from "./__generated__"
import {useState} from "react"
import {HiChevronDown, HiChevronUp} from "react-icons/hi2"

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

  return (
    <main className="h-screen w-screen">
      <div className="relative">
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
        <video
          className="w-screen h-screen object-cover"
          src={streamUrl}
          muted
          autoPlay
          loop
        />
      </div>
    </main>
  )
}

export default App
