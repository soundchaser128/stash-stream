import React, {useLayoutEffect, useState} from "react"
import {useSpringRef, animated, useTransition} from "@react-spring/web"
import styles from "./styles.module.css"
import {addApiKey, stashUrl} from "./util"
import {useQuery} from "@apollo/client"
import {GET_SCENES} from "./App"

export default function App() {
  const {data} = useQuery(GET_SCENES, {
    variables: {
      query: "",
      sort: "random",
    },
  })
  const videos = data?.findScenes.scenes
  const [activeIndex, setActiveIndex] = useState(0)
  const springApi = useSpringRef()
  // const length = videos?.length || 0
  // console.log(videos)

  const transitions = useTransition(activeIndex, {
    from: {y: "0%"},
    enter: {y: "-100%"},
    leave: {y: "100%"},
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        console.log("advancing index")
        setActiveIndex(activeIndex + 1)
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 1500,
    },
    // delay: 1000,
    ref: springApi,
  })

  const onNext = () => {
    springApi.start()
  }

  // useLayoutEffect(() => {
  //   springApi.start()
  // }, [activeIndex])

  if (!videos) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <button
          onClick={onNext}
          className="absolute z-10 rounded-lg p-3 bg-black bg-opacity-50 bottom-2 left-1/2 text-white"
        >
          Next
        </button>
        {transitions((springs, item) => (
          <animated.div className={styles.img__container} style={springs}>
            <video
              src={addApiKey(`${stashUrl}/scene/${videos[item].id}/stream`)}
            />
          </animated.div>
        ))}
      </div>
    </div>
  )
}
