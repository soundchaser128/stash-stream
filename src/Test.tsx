import React, {useState, useEffect} from "react"
import {useTransition, animated, useSpringRef} from "@react-spring/web"
import {addApiKey, stashUrl} from "./util"
import {GET_SCENES} from "./App"
import {useQuery} from "@apollo/client"
import {HiChevronDown, HiChevronUp} from "react-icons/hi2"

const classes = "absolute w-full h-full flex justify-center items-center"

export function NavButtons({
  currentSceneIndex,
  goToPreviousVideo,
  goToNextVideo,
}: {
  currentSceneIndex: number
  goToPreviousVideo: () => void
  goToNextVideo: () => void
}) {
  return (
    <div className="absolute flex flex-col gap-4 right-2 top-1/2 -translate-y-1/2 z-10">
      <button
        className="rounded-full bg-gray-200 p-2 bg-opacity-50 disabled:opacity-25"
        disabled={currentSceneIndex === 0}
        onClick={() => goToPreviousVideo()}
      >
        <HiChevronUp />
      </button>

      <button
        className="rounded-full bg-gray-200 p-2 bg-opacity-50"
        onClick={() => goToNextVideo()}
      >
        <HiChevronDown />
      </button>
    </div>
  )
}

export default function App() {
  const {data, loading} = useQuery(GET_SCENES, {
    variables: {
      query: "",
      sort: "random",
    },
  })
  const videos = data?.findScenes.scenes
  const length = videos?.length || 0

  const [index, set] = useState(0)
  const onNextVideo = () => set((state) => (state + 1) % length)
  const onPreviousVideo = () =>
    set((state) => Math.max(0, (state - 1 + length) % length))

  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {opacity: 0, transform: "translate3d(0, 100%, 0)"},
    enter: {opacity: 1, transform: "translate3d(0%, 0, 0)"},
    leave: {opacity: 0, transform: "translate3d(0, -100%, 0)"},
    config: {
      duration: 1000,
    },
  })

  useEffect(() => {
    transRef.start()
  }, [index])

  if (loading || !videos) {
    return <div>Loading...</div>
  }

  return (
    <div className={`flex w-screen h-screen relative`}>
      <NavButtons
        goToNextVideo={onNextVideo}
        goToPreviousVideo={onPreviousVideo}
        currentSceneIndex={index}
      />
      {transitions((style, i, state) => {
        console.log({style, i, state})
        const url = addApiKey(`${stashUrl}/scene/${videos[i]?.id}/stream`)
        return (
          <animated.div
            className={classes}
            style={{...style, background: "lightblue"}}
          >
            <video muted className="w-full h-full" autoPlay src={url} />
          </animated.div>
        )
      })}
    </div>
  )
}
