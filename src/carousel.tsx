import {useState} from "react"
import {useTransition, animated} from "@react-spring/web"
import {HiChevronDown, HiChevronUp} from "react-icons/hi2"
import {useHotkeys} from "react-hotkeys-hook"

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

function VideoCarousel({videos}: {videos: string[]}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const transitions = useTransition(currentVideoIndex, {
    from: {transform: `translateY(${direction === 1 ? "100%" : "-100%"})`},
    enter: {transform: "translateY(0%)"},
    leave: {transform: `translateY(${direction === 1 ? "-100%" : "100%"})`},
  })

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    setDirection(1)
  }

  const previousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    )
    setDirection(-1)
  }

  useHotkeys("w", previousVideo, [currentVideoIndex, length])
  useHotkeys("s", nextVideo, [currentVideoIndex, length])

  return (
    <div style={{position: "relative", width: "100%", height: "100%"}}>
      {transitions((style, index) => (
        <animated.video
          src={videos[index]}
          controls
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
      <NavButtons
        currentSceneIndex={currentVideoIndex}
        goToNextVideo={nextVideo}
        goToPreviousVideo={previousVideo}
      />
    </div>
  )
}

export default VideoCarousel
