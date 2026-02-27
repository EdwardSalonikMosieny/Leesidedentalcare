import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/services"
        element={<PlaceholderPage title="Our Services" />}
      />
      <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
