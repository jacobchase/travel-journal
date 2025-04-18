import Header from "./components/header"
import Entry from "./components/entry"
import travelLocations from "./data"
export default function App() {
  const traveldata = travelLocations.map((travel) => {
    return <Entry img={{
      src:travel.img.src,
      alt:travel.img.alt
    }
  }
    title = {travel.title}
    country = {travel.country}
    mapsLink = {travel.googleMapsLink}
    dates = {travel.dates}
    description = {travel.text}
    />
})
  return (
    <>
   <Header/>
   {traveldata}
   </>
  )
}