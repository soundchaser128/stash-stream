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
  const {data, loading} = useQuery(GET_TAGS, {
    variables: {
      filter: {
        sort: "scenes_count",
        direction: SortDirectionEnum.Desc,
        per_page: 40,
      },
    },
  })

  return (
    <main className="container flex items-center flex-col mr-auto ml-auto">
      <section className="inline-grid grid-cols-4 gap-4">
        {data?.findTags.tags.map((tag) => (
          <Link
            to={{
              pathname: "/carousel",
              search: `?q=${tag.name}`,
            }}
          >
            <article key={tag.id} className="bg-purple-50 shadow-md p-2">
              <h2 className="text-xl text-center">{tag.name}</h2>
            </article>
          </Link>
        ))}
      </section>
    </main>
  )
}
