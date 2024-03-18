// 'use client'

// import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
// import { Icon } from "leaflet"

// export default function LeafletMap(){

//     const position = [51.24272692022786, 22.519158024052366]

//     const customIcon = new Icon({
//         iconUrl: 'https://cdn-icons-png.flaticon.com/128/3367/3367586.png',
//         iconSize: [25,25]
//     })

//     return(
//         <div class=''>
//             <MapContainer center={position} zoom={14.5} scrollWheelZoom={true}>
//                 <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={position} icon={customIcon}>
//                 <Popup>
//                     Cloud Sushi <br />
//                 </Popup>
//                 </Marker>
//             </MapContainer>
//         </div>
//     )
// }