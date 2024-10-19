import {PlaceItems, Image, Details, Name, Description} from './styled'

const PlacesItem = props => {
  const {placeDetails} = props
  const {name, imgUrl, description} = placeDetails
  return (
    <PlaceItems>
      <Image src={imgUrl} alt={name} />
      <Details>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Details>
    </PlaceItems>
  )
}

export default PlacesItem
