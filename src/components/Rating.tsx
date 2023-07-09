import {HiOutlineStar, HiStar} from "react-icons/hi2"

interface Props {
  rating: number
}

const Rating: React.FC<Props> = ({rating}) => {
  const rating5 = rating / 20
  const halfStars = 5 - rating5

  const stars = []
  for (let i = 0; i < rating5; i++) {
    stars.push(<HiStar key={i} className="inline text-yellow-500" />)
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(
      <HiOutlineStar key={i + 10} className="inline text-yellow-500" />
    )
  }

  return <div className="flex gap-0.5">{stars}</div>
}

export default Rating
