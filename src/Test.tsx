import React, {useState, CSSProperties, useEffect} from "react"
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web"
import {addApiKey} from "./util"

const classes =
  "absolute cursor-pointer w-full h-full flex justify-center items-center text-6xl"

const videos = [
  addApiKey("http://nas.tomasi.xyz:9999/scene/5107/stream"),
  addApiKey("http://nas.tomasi.xyz:9999/scene/2972/stream"),
  addApiKey("http://nas.tomasi.xyz:9999/scene/2997/stream"),
]

const pages: ((
  props: AnimatedProps<{style: CSSProperties}>
) => React.ReactElement)[] = [
  ({style}) => (
    <animated.div
      className={classes}
      style={{...style, background: "lightpink"}}
    >
      <video autoPlay src={videos[0]} />
    </animated.div>
  ),
  ({style}) => (
    <animated.div
      className={classes}
      style={{...style, background: "lightgreen"}}
    >
      <video autoPlay src={videos[1]} />
    </animated.div>
  ),
  ({style}) => (
    <animated.div
      className={classes}
      style={{...style, background: "lightblue"}}
    >
      <video autoPlay src={videos[2]} />
    </animated.div>
  ),
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = () => set((state) => (state + 1) % 3)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {opacity: 0, transform: "translate3d(100%,0,0)"},
    enter: {opacity: 1, transform: "translate3d(0%,0,0)"},
    leave: {opacity: 0, transform: "translate3d(-50%,0,0)"},
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex w-screen h-screen`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
