import {useRef, useState} from "react"
import {useTransition, animated, useSpring} from "@react-spring/web"
import {
  HiCalendar,
  HiCamera,
  HiChevronDown,
  HiChevronUp,
  HiOutlineMagnifyingGlassCircle,
  HiUser,
} from "react-icons/hi2"
import {useHotkeys} from "react-hotkeys-hook"
import {useDrag} from "@use-gesture/react"
import {useNavigate} from "react-router-dom"
import debounce from "lodash.debounce"

interface Video {
  url: string
  title: string
  performers: string[]
  studio?: string
  date?: string
}

const buttonStyles =
  "rounded-full p-3 bg-purple-400 bg-opacity-50 text-white disabled:opacity-25"

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
        className={buttonStyles}
        disabled={currentSceneIndex === 0}
        onClick={() => goToPreviousVideo(0)}
      >
        <HiChevronUp className="w-8 h-8" />
      </button>

      <button className={buttonStyles} onClick={() => goToNextVideo(0)}>
        <HiChevronDown className="w-8 h-8" />
      </button>
    </div>
  )
}

interface OverlayProps {
  video?: Video
  index: number
  nextVideo: () => void
  previousVideo: () => void
  onCropVideo: () => void
  onQueryChange: (query: string) => void
}

function Overlay({
  video,
  index,
  nextVideo,
  previousVideo,
  onCropVideo,
  onQueryChange,
}: OverlayProps) {
  const overlayTimeout = 2000

  const navigate = useNavigate()
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
    }, overlayTimeout)
  }

  const setQueryInUrl = (query: string) => {
    onQueryChange(query)
    navigate({
      search: `?q=${encodeURIComponent(query)}`,
    })
  }

  const debouncedSetQueryInUrl = debounce(setQueryInUrl, 500)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current)

    debouncedSetQueryInUrl(event.target.value)

    api.start({opacity: 1})
    timeout.current = window.setTimeout(() => {
      api.start({opacity: 0})
    }, overlayTimeout)
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
        className="text-white absolute top-1 w-60 text-center left-1/2 translate -translate-x-1/2 h-12 px-4 leading-6 bg-opacity-0 border-b-2 border-white bg-transparent focus:border-b-2 focus:outline-none placeholder-white"
      />

      {video && (
        <section className="absolute left-1/2 -translate-x-1/2 text-center truncate bottom-4 text-white p-2">
          <h1 className="text-xl lg:text-2xl">{video.title}</h1>
          {video.performers.length > 0 && (
            <p className="text-lg">
              <HiUser className="inline w-4 h-4 mr-2" />
              {video.performers.join(", ")}
            </p>
          )}
          {video.studio && (
            <p className="text-lg">
              <HiCamera className="inline w-4 h-4 mr-2" />
              {video.studio}
            </p>
          )}
          {video.date && (
            <p className="text-lg">
              <HiCalendar className="inline w-4 h-4 mr-2" />
              {video.date}
            </p>
          )}
        </section>
      )}
      <button
        onClick={onCropVideo}
        className={`${buttonStyles} absolute top-2 right-2`}
      >
        <HiOutlineMagnifyingGlassCircle />
      </button>
    </animated.div>
  )
}

interface Props {
  videos: Video[]
  cropVideo?: boolean
  loading?: boolean
  initialIndex?: number
  onVideoChange?: (index: number) => void
}

function VideoCarousel({videos, loading, initialIndex, onVideoChange}: Props) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(initialIndex || 0)
  const [direction, setDirection] = useState(1)
  const [cropVideo, setCropVideo] = useState(false)

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
    if (videos.length === 0) { 
      return
    }
    const prevIndex = currentVideoIndex
    // const nextIndex = 
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    setDirection(1)
  }

  const previousVideo = () => {
    if (videos.length === 0) {
      return
    }
    const prevIndex = currentVideoIndex
    const nextIndex = Math.max(0, (prevIndex - 1 + videos.length) % videos.length)
    setCurrentVideoIndex(nextIndex)
    setDirection(-1)
    onVideoChange?.(nextIndex)
  }

  useHotkeys(["w", "up"], previousVideo, [currentVideoIndex, length])
  useHotkeys(["s", "down"], nextVideo, [currentVideoIndex, length])

  const onQueryChange = () => {
    setCurrentVideoIndex(0)
  }

  return (
    <div {...bind()} className="relative w-full h-full touch-none">
      {!loading &&
        videos.length > 0 &&
        transitions((style, index) => (
          <animated.video
            src={videos[index]?.url}
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
        onCropVideo={() => setCropVideo((prev) => !prev)}
        onQueryChange={onQueryChange}
      />
    </div>
  )
}

export default VideoCarousel
