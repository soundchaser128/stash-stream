import {HiCamera, HiTag, HiVideoCamera} from "react-icons/hi2"
import {Link} from "react-router-dom"

const buttonStyles = "btn btn-primary btn-lg"

export default function Index() {
  return (
    <main className="container flex items-center flex-col mr-auto ml-auto px-1 h-screen justify-center">
      <h1 className="text-4xl my-6 font-bold">StashStream</h1>
      <section className="inline-grid lg:grid-cols-3 gap-4">
        <Link to="/carousel/video" className={buttonStyles}>
          <HiVideoCamera />
          Scenes
        </Link>

        <Link to="/carousel/image" className={buttonStyles}>
          <HiCamera />
          Images
        </Link>

        <Link to="/carousel/marker" className={buttonStyles}>
          <HiTag />
          Markers
        </Link>
      </section>
    </main>
  )
}
