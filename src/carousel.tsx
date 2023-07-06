import React, { useState } from "react"
import { useTransition, animated } from "@react-spring/web"
import { NavButtons } from "./Test"

function VideoCarousel({ videos }: { videos: string[] }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const transitions = useTransition(currentVideoIndex, {
    from: { transform: `translateY(${direction === 1 ? '100%' : '-100%'})` },
    enter: { transform: "translateY(0%)" },
    leave: { transform: `translateY(${direction === 1 ? '-100%' : '100%'})` },
  })

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    setDirection(1);
  }

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    setDirection(-1);
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {transitions((style, index) => (
        <animated.video
          src={videos[index]}
          autoPlay
          muted
          loop
          style={{
            ...style,
            position: "absolute",
            width: "100%",
            height: "100%",
            // objectFit: "cover",
          }}
        />
      ))}
      <NavButtons currentSceneIndex={currentVideoIndex} goToNextVideo={nextVideo} goToPreviousVideo={previousVideo} />
    </div>
  )
}

export default VideoCarousel
