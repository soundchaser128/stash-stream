import { useQuery } from '@apollo/client'
import { gql } from './__generated__'
import { useState } from 'react'

const GET_SCENES = gql(`
query GetScenes {
  findScenes {
  	scenes {
      title
      sceneStreams {
        url
        label
      }
      files {
        basename
      }
    }
  }
}`)

function App() {
  const { data, loading } = useQuery(GET_SCENES, {})
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)

  return (
    <main className="h-screen w-screen">
      <div className="flex">
        <video />
      </div>
    </main>
  )
}

export default App
