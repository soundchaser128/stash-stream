import {ApolloError, useQuery} from "@apollo/client"
import {gql} from "../__generated__"
import {PER_PAGE, addApiKey, stashUrl} from "../util"
import {useNavigate, useParams, useSearchParams} from "react-router-dom"
import Carousel, {CarouselItem, ItemType} from "../components/Carousel"
import {CriterionModifier, SortDirectionEnum} from "../__generated__/graphql"
import {useMemo} from "react"

const GET_SCENES = gql(`
query GetScenes($filter: FindFilterType, $sceneFilter: SceneFilterType) {
  findScenes(
    filter: $filter,
    scene_filter: $sceneFilter
  ) {
    count
    scenes {
      id
      play_count
      details
      rating100
      o_counter
      date
      performers {
        name
      }
      studio {
        name
      }
      title
      files {
        basename
        duration
      }
      tags {
        name
      }
    }
  }
}`)

const GET_IMAGES = gql(`
query GetImages($filter: FindFilterType, $imageFilter: ImageFilterType) {
  findImages(filter: $filter, image_filter: $imageFilter) {
    count
    images {
      id
      date
      rating100
      o_counter
      performers {
        name
      }
      studio {
        name
      }
      title
			tags {
        name
      }
    }
  }
}`)

const randomPart = Math.floor(Math.random() * 10 ** 8)
// const SORT = "created_at"
const SORT = `random_${randomPart}`

function useVideos(
  type: ItemType,
  query: string,
  page: number,
  tag: string | null
) {
  const result = useQuery(GET_SCENES, {
    skip: type !== "video",
    variables: {
      sceneFilter: {
        tags: {
          value: tag ? [tag] : undefined,
          modifier: CriterionModifier.Includes,
        },
      },
      filter: {
        q: query,
        sort: SORT,
        direction: SortDirectionEnum.Desc,
        page: page,
      },
    },
  })

  return type === "video" ? result : undefined
}

function useImages(
  type: ItemType,
  query: string,
  page: number,
  tag: string | null
) {
  const result = useQuery(GET_IMAGES, {
    skip: type !== "image",
    variables: {
      imageFilter: {
        tags: {
          value: tag ? [tag] : undefined,
          modifier: CriterionModifier.Includes,
        },
      },
      filter: {
        q: query,
        sort: SORT,
        direction: SortDirectionEnum.Desc,
        page: page,
      },
    },
  })
  return type === "image" ? result : undefined
}

type Result =
  | {type: undefined; data?: undefined; loading: boolean; error?: ApolloError}
  | {
      type: "video"
      data?: NonNullable<ReturnType<typeof useVideos>>["data"]
      loading: boolean
      error?: ApolloError
    }
  | {
      type: "image"
      data?: NonNullable<ReturnType<typeof useImages>>["data"]
      loading: boolean
      error?: ApolloError
    }

function useItems(
  type: ItemType,
  query: string,
  page: number,
  tag: string | null
): Result {
  const videos = useVideos(type, query, page, tag)
  const images = useImages(type, query, page, tag)
  if (type == "video") {
    const {loading, error, data} = videos!
    return {
      type: "video",
      data,
      loading,
      error,
    }
  } else {
    const {loading, error, data} = images!
    return {
      type: "image",
      data,
      loading,
      error,
    }
  }
}

const getItems = (result: Result): CarouselItem[] | undefined => {
  switch (result.type) {
    case "video":
      return result.data?.findScenes.scenes.map((video) => {
        const url = addApiKey(`${stashUrl}/scene/${video.id}/stream`)
        const title = video.title || video.files[0].basename
        const date = video.date || undefined
        const performers = video.performers.map((performer) => performer.name)
        const studio = video.studio?.name || undefined
        const tags = video.tags.map((tag) => tag.name)
        return {
          url,
          title,
          date,
          performers,
          studio,
          tags,
          details: video.details || undefined,
          rating: video.rating100 || undefined,
          oCounter: video.o_counter || undefined,
          views: video.play_count || undefined,
          type: "video",
        }
      })
    case "image":
      return result.data?.findImages.images.map((image) => {
        const url = addApiKey(`${stashUrl}/image/${image.id}/image`)
        const title = image.title || image.id
        const date = image.date || undefined
        const performers = image.performers.map((performer) => performer.name)
        const studio = image.studio?.name || undefined
        const tags = image.tags.map((tag) => tag.name)
        return {
          url,
          title,
          date,
          performers,
          studio,
          tags,
          rating: image.rating100 || undefined,
          oCounter: image.o_counter || undefined,
          type: "image",
        }
      })
  }
}

function VideosPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""
  const index = Number(searchParams.get("index")) || 0
  const page = Number(searchParams.get("page")) || 1
  const tag = searchParams.get("tag")
  const navigate = useNavigate()
  const params = useParams<{type: ItemType}>()
  const result = useItems(params.type!, query, page, tag)
  const items = useMemo(() => getItems(result), [result])
  const loading = result.loading
  const error = result.error
  const count =
    (result.type === "image"
      ? result.data?.findImages.count
      : result.data?.findScenes.count) ?? 0
  const totalPages = Math.ceil(count / PER_PAGE)

  const onVideoChange = async (index: number) => {
    searchParams.set("index", index.toString())

    navigate(
      {
        search: `?${searchParams.toString()}`,
      },
      {replace: true}
    )
  }

  const onNextPage = async () => {
    searchParams.set("page", (page + 1).toString())
    navigate(
      {
        search: `?${searchParams.toString()}`,
      },
      {replace: true}
    )
  }

  const onPreviousPage = async () => {
    searchParams.set("page", (page - 1).toString())
    navigate(
      {
        search: `?${searchParams.toString()}`,
      },
      {replace: true}
    )
  }

  return (
    <main className="h-screen w-screen bg-black overflow-hidden">
      {error && (
        <div className="flex flex-col  text-white p-4">
          <strong>{error.name}:</strong>
          <code>{error.message}</code>
        </div>
      )}

      <div className="relative h-full w-full">
        {items && (
          <Carousel
            loading={loading}
            items={items}
            initialIndex={index}
            onItemChange={onVideoChange}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
            page={page}
            totalPages={totalPages}
            totalResults={count}
          />
        )}
      </div>
    </main>
  )
}

export default VideosPage
