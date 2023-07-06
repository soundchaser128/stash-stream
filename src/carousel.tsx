import {useState} from "react"
import {useTransition, animated} from "@react-spring/web"
import {HiChevronDown, HiChevronUp} from "react-icons/hi2"
import {useHotkeys} from "react-hotkeys-hook"
import {useDrag} from "@use-gesture/react"

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
    <div className="absolute flex flex-col gap-6 right-2 top-1/2 -translate-y-1/2 z-10">
      <button
        className="rounded-full bg-gray-200 p-3 bg-opacity-50 disabled:opacity-25"
        disabled={currentSceneIndex === 0}
        onClick={() => goToPreviousVideo(0)}
      >
        <HiChevronUp className="w-8 h-8" />
      </button>

      <button
        className="rounded-full bg-gray-200 p-3 bg-opacity-50"
        onClick={() => goToNextVideo(0)}
      >
        <HiChevronDown className="w-8 h-8" />
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

  const bind = useDrag((props) => {
    const [, swipeY] = props.swipe
    if (swipeY === -1) {
      nextVideo()
    } else if (swipeY === 1) {
      previousVideo()
    }
  })

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    setDirection(1)
  }

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      Math.max(0, (prevIndex - 1 + videos.length) % videos.length)
    )
    setDirection(-1)
  }

  useHotkeys("w", previousVideo, [currentVideoIndex, length])
  useHotkeys("s", nextVideo, [currentVideoIndex, length])

  return (
    <div {...bind()} className="relative w-full h-full touch-none">
      {transitions((style, index) => (
        <animated.video
          src={videos[index]}
          playsInline
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
