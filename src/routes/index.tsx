import {useQuery} from "@apollo/client"
import {gql} from "../__generated__"
import {SortDirectionEnum} from "../__generated__/graphql"
import {HiCamera, HiClock, HiUser, HiVideoCamera} from "react-icons/hi2"
import {Link} from "react-router-dom"

export const GET_TAGS = gql(`
query GetTags($filter: FindFilterType) {
  findTags(filter: $filter) {
    count
    tags {
      id
      name
      scene_count
      image_count
      scene_marker_count
      performer_count
    }
  }
}
`)

export default function Index() {
  const {data} = useQuery(GET_TAGS, {
    variables: {
      filter: {
        sort: "scenes_count",
        direction: SortDirectionEnum.Desc,
        per_page: 80,
      },
    },
  })

  return (
    <main className="container flex items-center flex-col mr-auto ml-auto px-1">
      <section className="inline-grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {data?.findTags.tags.map((tag) => (
          <article key={tag.id} className="bg-gray-100 shadow-md p-2">
            <h2 className="text-xl text-center">{tag.name}</h2>
            <div className="text-sm flex text-center flex-col lg:flex-row lg:justify-between">
              <Link
                className="text-purple-700"
                to={{
                  pathname: "/carousel/video",
                  search: `?tag=${tag.id}`,
                }}
              >
                Videos ({tag.scene_count})
              </Link>
              <Link
                className="text-purple-700"
                to={{
                  pathname: "/carousel/image",
                  search: `?tag=${tag.id}`,
                }}
              >
                Images ({tag.image_count})
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
