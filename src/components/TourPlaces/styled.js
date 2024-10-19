import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eef4f7;
`

export const TravelHeading = styled.h1`
  font-family: roboto;
  font-size: 40px;
  font-weight: 600;
  color: #334155;
  margin: 20px 0px 5px 0px;
`

export const HorizontalRule = styled.hr`
  width: 210px;
  border: 2px solid #52bbf0;
  margin: 0px;
`
export const TravelListView = styled.div`
  display: flex;
  flex-direction: column;
`

export const TravelList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-wrap: wrap;
  margin-top: 30px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
