import {HiCamera, HiTag, HiVideoCamera} from "react-icons/hi2"
import {Link} from "react-router-dom"

const buttonStyles =
  "bg-blue-600 text-lg text-white p-4 text-xl rounded-lg shadow-lg flex items-center justify-center gap-2"

export default function Index() {
  return (
    <main className="container flex items-center flex-col mr-auto ml-auto px-1">
      <h1 className="text-4xl my-6 font-bold">StashStream</h1>
      <section className="inline-grid lg:grid-cols-3 gap-4">
        <Link to="/carousel/video" className={buttonStyles}>
          <HiVideoCamera className="inline-block" />
          Scenes
        </Link>

        <Link to="/carousel/image" className={buttonStyles}>
          <HiCamera className="inline-block" />
          Images
        </Link>

        <Link to="/carousel/marker" className={buttonStyles}>
          <HiTag className="inline-block" />
          Markers
        </Link>
      </section>
    </main>
  )
}
