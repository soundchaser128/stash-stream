import {useEffect, useRef, useState} from "react"
import {useTransition, animated, useSpring, a} from "@react-spring/web"
import {HiCamera, HiChevronDown, HiChevronUp, HiUser} from "react-icons/hi2"
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
    <div className="absolute flex flex-col gap-6 right-4 top-1/2 -translate-y-1/2 z-20">
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

interface Video {
  url: string
  title: string
  performers: string[]
  studio?: string
  date?: string
}

interface Props {
  videos: Video[]
  cropVideo?: boolean
  onQueryChange: (query: string) => void
  loading?: boolean
}

interface OverlayProps {
  video?: Video
  index: number
  nextVideo: () => void
  previousVideo: () => void
  onQueryChange: (query: string) => void
}

function Overlay({
  video,
  index,
  nextVideo,
  previousVideo,
  onQueryChange,
}: OverlayProps) {
  const [visible, setVisible] = useState(true)
  const [springs, api] = useSpring(() => ({
    from: {opacity: 0},
    config: {
      duration: 250,
    },
    onRest: () => {
      setVisible(springs.opacity.get() === 1)
    },
  }))
  const timeout = useRef<number>()

  const onMouseMove = () => {
    clearTimeout(timeout.current)
    api.start({opacity: 1})
    timeout.current = window.setTimeout(() => {
      api.start({opacity: 0})
    }, 2000)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current)
    onQueryChange(event.target.value)
    api.start({opacity: 1})
    timeout.current = window.setTimeout(() => {
      api.start({opacity: 0})
    }, 2000)
  }

  return (
    <animated.div
      onMouseMove={onMouseMove}
      className="w-full h-full absolute z-10"
      style={springs}
    >
      {visible && (
        <>
          <NavButtons
            currentSceneIndex={index}
            goToNextVideo={nextVideo}
            goToPreviousVideo={previousVideo}
          />
        </>
      )}
      <input
        onChange={onChange}
        placeholder="Search..."
        className="text-white absolute top-1 w-60 text-center left-1/2 translate -translate-x-1/2 h-12 px-4 leading-6 bg-opacity-0 border-b-2 border-white bg-transparent focus:border-b-2 focus:outline-none"
      />

      {video && (
        <div className="absolute w-full text-center truncate bottom-4 text-white ">
          <div className="p-2 bg-black bg-opacity-50">
            <h1 className="text-4xl">{video.title}</h1>
            {video.performers.length > 0 && (
              <p className="text-xl">
                <HiUser className="inline w-4 h-4 mr-2" />
                {video.performers.join(", ")}
              </p>
            )}
            {video.studio && (
              <p className="text-xl">
                <HiCamera className="inline w-4 h-4 mr-2" />
                {video.studio}
              </p>
            )}
          </div>
        </div>
      )}
    </animated.div>
  )
}

function VideoCarousel({videos, cropVideo, onQueryChange, loading}: Props) {
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
    if (videos.length === 0) return
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    setDirection(1)
  }

  const previousVideo = () => {
    if (videos.length === 0) return
    setCurrentVideoIndex((prevIndex) =>
      Math.max(0, (prevIndex - 1 + videos.length) % videos.length)
    )
    setDirection(-1)
  }

  useHotkeys(["w", "up"], previousVideo, [currentVideoIndex, length])
  useHotkeys(["s", "down"], nextVideo, [currentVideoIndex, length])

  return (
    <div {...bind()} className="relative w-full h-full touch-none">
      {!loading &&
        videos.length > 0 &&
        transitions((style, index) => (
          <animated.video
            src={videos[index].url}
            playsInline
            autoPlay
            muted
            loop
            className="absolute w-full h-full"
            style={{
              ...style,
              objectFit: cropVideo ? "cover" : undefined,
            }}
          />
        ))}

      <Overlay
        video={videos[currentVideoIndex]}
        nextVideo={nextVideo}
        previousVideo={previousVideo}
        index={currentVideoIndex}
        onQueryChange={onQueryChange}
      />
    </div>
  )
}

export default VideoCarousel
