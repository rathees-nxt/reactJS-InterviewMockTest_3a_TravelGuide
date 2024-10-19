import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PlacesItem from '../PlacesItem'

import {
  AppContainer,
  TravelHeading,
  HorizontalRule,
  TravelListView,
  TravelList,
  LoaderContainer,
} from './styled'

class TourPlaces extends Component {
  state = {placesList: [], isLoading: false}

  componentDidMount() {
    this.renderTourGuide()
  }

  renderTourGuide = async () => {
    this.setState({isLoading: true})
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    if (response.ok) {
      const data = await response.json()
      const filteredData = data.packages.map(place => ({
        id: place.id,
        name: place.name,
        imgUrl: place.image_url,
        description: place.description,
      }))
      this.setState({placesList: filteredData, isLoading: false})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderTravelList = () => {
    const {placesList} = this.state
    return (
      <TravelList>
        {placesList.map(places => (
          <PlacesItem key={places.id} placeDetails={places} />
        ))}
      </TravelList>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <AppContainer>
        <TravelHeading>Travel Guide</TravelHeading>
        <HorizontalRule />
        <TravelListView>
          {isLoading ? this.renderLoader() : this.renderTravelList()}
        </TravelListView>
      </AppContainer>
    )
  }
}

export default TourPlaces
