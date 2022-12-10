import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Countries from './pages/Countries'
import Country from './pages/Country'
import Cave from './components/Cave'
import Underwater from './components/Underwater'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<Country />} />
          <Route path="/countries/:id/cave/:caveId" element={<Cave />} />
          <Route
            path="/countries/:id/underwater/:caveId"
            element={<Underwater />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
