import React, {useCallback, useEffect, useRef, useState} from "react"
import {useTransition, animated, useSpring} from "@react-spring/web"
import {
  HiBars3,
  HiCalendar,
  HiCamera,
  HiChevronDown,
  HiChevronLeft,
  HiChevronUp,
  HiTag,
  HiUser,
} from "react-icons/hi2"
import {useHotkeys} from "react-hotkeys-hook"
import {useDrag} from "@use-gesture/react"
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import clsx from "clsx"
import Rating from "./Rating"
import {PER_PAGE, stashUrl} from "../util"

function pluralize(word: string, count: number) {
  return count === 1 ? word : `${word}s`
}

export type ItemType = "video" | "image" | "marker"

interface Tag {
  id: string
  name: string
}

interface VideoFile {
  src: string
  type: string
}

export interface CarouselItem {
  type: ItemType
  url: string
  title: string
  performers: string[]
  studio?: string
  date?: string
  tags: Tag[]
  details?: string
  rating?: number
  oCounter?: number
  views?: number
  files?: VideoFile[]
  screenshot?: string
}

function NavButtons({
  goToPrevious,
  goToNext,
  hasNextItem,
  hasPreviousItem,
}: {
  goToPrevious: () => void
  goToNext: () => void
  hasNextItem: boolean
  hasPreviousItem: boolean
}) {
  return (
    <div className="absolute flex flex-col gap-6 right-4 top-1/2 -translate-y-1/2 z-20">
      <button
        className="btn btn-square btn-primary"
        disabled={!hasPreviousItem}
        onClick={() => goToPrevious()}
      >
        <HiChevronUp className="w-8 h-8" />
      </button>

      <button
        className="btn btn-square btn-primary"
        disabled={!hasNextItem}
        onClick={() => goToNext()}
      >
        <HiChevronDown className="w-8 h-8" />
      </button>
    </div>
  )
}

interface OverlayProps {
  item?: CarouselItem
  nextItem: () => void
  previousItem: () => void
  hasNextItem: boolean
  hasPreviousItem: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  collapsed: boolean
}

function Overlay({
  nextItem,
  previousItem,
  hasNextItem,
  hasPreviousItem,
  setCollapsed,
}: OverlayProps) {
  const overlayTimeout = 2000

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

  const showOverlay = useCallback(() => {
    clearTimeout(timeout.current)
    api.start({opacity: 1})
    timeout.current = window.setTimeout(() => {
      api.start({opacity: 0})
    }, overlayTimeout)
  }, [api])

  useEffect(() => {
    showOverlay()
    document.addEventListener("mousemove", showOverlay)
    document.addEventListener("mousedown", showOverlay)
    document.addEventListener("keydown", showOverlay)
    document.addEventListener("touchstart", showOverlay)

    // cleanup
    return () => {
      clearTimeout(timeout.current)
      document.removeEventListener("mousemove", showOverlay)
      document.removeEventListener("mousedown", showOverlay)
      document.removeEventListener("keydown", showOverlay)
      document.removeEventListener("touchstart", showOverlay)
    }
  }, [])

  return (
    <animated.div style={springs}>
      {visible && (
        <>
          <button
            onClick={() => setCollapsed((set) => !set)}
            className="btn btn-square btn-neutral absolute top-2 right-2"
          >
            <HiBars3 />
          </button>

          <NavButtons
            goToNext={nextItem}
            goToPrevious={previousItem}
            hasNextItem={hasNextItem}
            hasPreviousItem={hasPreviousItem}
          />
          <Link
            to="/"
            className={clsx("btn btn-square", "top-2 left-2 absolute z-10")}
          >
            <HiChevronLeft />
          </Link>
        </>
      )}
    </animated.div>
  )
}

function MediaItem({
  item,
  style,
  goToNext,
}: {
  item: CarouselItem
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: any
  goToNext: () => void
}) {
  if (item.type === "video" || item.type === "marker") {
    return (
      <animated.video
        playsInline
        autoPlay
        muted
        className={clsx("absolute w-full h-full")}
        style={style}
        onEnded={goToNext}
        controls
        poster={item.screenshot}
      >
        {item.files?.map((file, idx) => (
          <source
            key={idx}
            src={file.src.replace(stashUrl, "")}
            type={file.type}
          />
        ))}
      </animated.video>
    )
  } else {
    return (
      <animated.img
        src={item.url}
        className={clsx("absolute w-full h-full object-contain")}
        style={style}
      />
    )
  }
}

const listItemStyles = "flex gap-2 items-center"

function Sidebar({
  item,
  totalResults,
  index,
  collapsed,
}: {
  item?: CarouselItem
  totalResults: number
  index: number
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams({q: ""})
  const [query, setQuery] = useState(searchParams.get("q") || "")

  const onQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
      navigate(
        {
          search: `?q=${encodeURIComponent(event.target.value)}`,
        },
        {replace: true},
      )
    },
    [],
  )

  return (
    <section
      className={clsx(
        "bg-base-200 p-4 overflow-y-scroll overflow-x-hidden text-lg relative",
        collapsed ? "hidden" : "lg:w-1/4 w-4/5",
      )}
    >
      {!collapsed && (
        <div className="h-full flex flex-col justify-between">
          {!item && <div></div>}
          {item && (
            <ul className="flex flex-col gap-2">
              <li className={listItemStyles}>
                <strong>{item.title}</strong>
              </li>
              <li className="flex gap-6 items-center">
                {item.rating && <Rating rating={item.rating} />}
                {item.oCounter && (
                  <span>
                    <span className="w-4 h-4 mr-2">💦</span>
                    {item.oCounter}
                  </span>
                )}
                {item.views && (
                  <span>
                    {item.views} {pluralize("view", item.views)}
                  </span>
                )}
              </li>
              {item.details && (
                <li className={clsx(listItemStyles, "text-sm")}>
                  {item.details}
                </li>
              )}

              {item.performers.length > 0 && (
                <li className={listItemStyles}>
                  <HiUser className="inline w-4 h-4" />
                  {item.performers.join(", ")}
                </li>
              )}
              {item.studio && (
                <li className={listItemStyles}>
                  <HiCamera className="inline w-4 h-4" />
                  {item.studio}
                </li>
              )}
              {item.date && (
                <li className={listItemStyles}>
                  <HiCalendar className="inline w-4 h-4" />
                  {item.date}
                </li>
              )}
              {item.tags.length > 0 && (
                <li className={listItemStyles}>
                  <ul className="text-xs flex flex-wrap items-center gap-x-1 gap-y-3">
                    <HiTag className="inline w-4 h-4 mr-2" />
                    {item.tags.map((tag) => (
                      <li key={tag.id}>
                        <Link
                          className="bg-blue-600 hover:bg-blue-500 rounded-full py-1 px-3"
                          to={{
                            search: `?tag=${encodeURIComponent(tag.id)}`,
                          }}
                        >
                          {tag.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          )}

          <div className="flex flex-col gap-2">
            <input
              placeholder="Search..."
              value={query}
              onChange={onQueryChange}
              className="self-center bg-transparent focus-visible:outline-none border-b-2 border-white text-center p-2"
            />
            <p className="w-full text-center text-sm">
              {index + 1} / {totalResults}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

interface Props {
  items: CarouselItem[]
  crop?: boolean
  loading?: boolean
  initialIndex?: number
  onItemChange?: (index: number) => void
  onNextPage: () => Promise<void>
  onPreviousPage: () => Promise<void>
  page: number
  totalPages: number
  totalResults: number
}

function Carousel({
  items,
  loading,
  initialIndex,
  onItemChange,
  onNextPage,
  onPreviousPage,
  page,
  totalPages,
  totalResults,
}: Props) {
  const [index, setIndex] = useState(initialIndex || 0)
  const [direction, setDirection] = useState(1)
  const hasNextItem = index < items.length - 1 || page < totalPages - 1
  const hasPreviousItem = index !== 0 || page > 1
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const transitions = useTransition(index, {
    from: {transform: `translateY(${direction === 1 ? "100%" : "-100%"})`},
    enter: {transform: "translateY(0%)"},
    leave: {transform: `translateY(${direction === 1 ? "-100%" : "100%"})`},
    config: {
      friction: 15,
      tension: 100,
    },
  })

  const bind = useDrag((props) => {
    const [, swipeY] = props.swipe
    if (swipeY === -1) {
      nextItem()
    } else if (swipeY === 1) {
      previousItem()
    }
  })

  const nextItem = async () => {
    if (!hasNextItem) {
      return
    }

    let nextIndex = index + 1
    if (nextIndex === items.length - 1 && page < totalPages - 1) {
      await onNextPage()
      nextIndex = 0
    }
    setIndex(nextIndex)
    setDirection(1)
    onItemChange && onItemChange(nextIndex)
  }

  const previousItem = async () => {
    if (!hasPreviousItem) {
      return
    }

    let nextIndex = index - 1

    if (nextIndex < 0) {
      await onPreviousPage()
      nextIndex = PER_PAGE - 1
    }

    setIndex(nextIndex)
    setDirection(-1)
    onItemChange && onItemChange(nextIndex)
  }

  useHotkeys(["w", "up"], previousItem, [index, length])
  useHotkeys(["s", "down"], nextItem, [index, length])

  const showMedia = !loading && items.length > 0

  return (
    <div {...bind()} className="w-full h-full flex touch-none">
      <div className="relative grow">
        {showMedia &&
          transitions((style, index) => (
            <MediaItem style={style} item={items[index]} goToNext={nextItem} />
          ))}
        {!showMedia && (
          <animated.div className={clsx("absolute w-full h-full")} />
        )}

        <Overlay
          item={items[index]}
          nextItem={nextItem}
          previousItem={previousItem}
          hasNextItem={hasNextItem}
          hasPreviousItem={hasPreviousItem}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        {items?.length === 0 && !loading && (
          <div className="flex flex-col items-center mt-16 justify-center text-white p-4">
            <h1 className="text-4xl">No results</h1>
            <p className="text-xl">Try a different search</p>
          </div>
        )}
      </div>

      <Sidebar
        item={items[index]}
        totalResults={totalResults}
        index={index}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
    </div>
  )
}

export default Carousel
