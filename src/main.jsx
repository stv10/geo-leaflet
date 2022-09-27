import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomeScreen } from './screens'
import './styles/index.css'
import 'leaflet/dist/leaflet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>
)
