import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DesignRationalePage from './pages/DesignRationalePage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design-rationale" element={<DesignRationalePage />} />
      </Routes>
    </BrowserRouter>
  )
}
