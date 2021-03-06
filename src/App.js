import AdvertisementSection from "./Sections/AdvertisementSection"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/" component={AdvertisementSection} />
    </Router>
  )
}

export default App
