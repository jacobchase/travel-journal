import Header from "./components/header"
import Entry from "./components/entry"
import travelLocations from "./data"
export default function App() {
  const traveldata = travelLocations.map((travel) => {
    return <Entry
    key = {travel.id}
    {...travel}
    />
})
  return (
    <>
   <Header/>
   {traveldata}
   </>
  )
}