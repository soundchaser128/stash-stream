import React, {useState, useEffect} from "react"
import {useTransition, animated, useSpringRef} from "@react-spring/web"
import {addApiKey, stashUrl} from "./util"
import {GET_SCENES} from "./App"
import {useQuery} from "@apollo/client"

const classes =
  "absolute w-full h-full flex justify-center items-center"

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
  const onClick = () => set((state) => (state + 1) % length)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {opacity: 0, transform: "translate3d(0,100%,0)"},
    enter: {opacity: 1, transform: "translate3d(0%,0,0)"},
    leave: {opacity: 0, transform: "translate3d(0,-100%,0)"},
    duration: 2500,
  })
  useEffect(() => {
    transRef.start()
  }, [index])

  if (loading || !videos) {
    return <div>Loading...</div>
  }

  return (
    <div className={`flex w-screen h-screen`} onClick={onClick}>
      {transitions((style, i) => {
        const url = addApiKey(`${stashUrl}/scene/${videos[i]?.id}/stream`)
        return (
          <animated.div
            className={classes}
            style={{...style, background: "lightblue"}}
          >
            <video className="w-full h-full" autoPlay src={url} />
          </animated.div>
        )
      })}
    </div>
  )
}
