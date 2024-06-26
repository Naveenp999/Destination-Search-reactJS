import './index.css'

const DestinationItem = props => {
  const {value} = props
  const {name, imgUrl} = value
  console.log(name)
  return (
    <li className="list-item">
      <img src={imgUrl} alt="name" className="place-image" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
