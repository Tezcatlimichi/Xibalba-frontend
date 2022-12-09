import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Countries from './pages/Countries'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/countries" element={<Countries />} />
          {/* <Route />
          <Route /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
