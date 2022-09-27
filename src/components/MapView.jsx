import { useLayoutEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { getUserLocation } from "../helpers"
import { searchApi } from "../apis"
export const MapView = () => {
const [location, setLocation] = useState([]);

useLayoutEffect(()=> {
    getUserLocation().then((res) => {
        console.log(res);
        setLocation(res);
        searchApi.get(`/${res.join(',')}.json`).then((response) => {
          console.log(response);
        })
    })
    .catch((err) => {
        console.log(err);
    })
}, [])

  return (
    <MapContainer center={{lat: location.at(0), lng: location.at(1)}} zoom={13} id='mapDiv'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={{lat: location.at(0), lng: location.at(1)}}>
          <Popup>
            User Location.
          </Popup>
        </Marker>
  </MapContainer>
  )
}
