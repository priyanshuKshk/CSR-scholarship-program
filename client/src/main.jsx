import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "./input.css"

import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout'
import App from './App'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ContactUs from './pages/ContactUs'
import ScholarshipForm from './pages/ScholarshipForm'
import EligibilityPage from './pages/EligibilityPage'
import Resources from './pages/Resources'
import Initiatives from './pages/Initiatives'
import Fincharcha from './pages/Fincharcha'
import Saarthi from './pages/Saarthi'
import Aaganwadi from './pages/Aaganwadi'
import Testimonial from './pages/Testimonials'
import AnnualReport from './pages/AnnualReport'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/eligibility" element={<EligibilityPage />} />
        <Route path="/scholarship-form" element={<ScholarshipForm />} />
        
      <Route path="/about" element={<About />} />
      <Route path="/initiatives" element={<Initiatives />} />
      <Route path="/fincharcha" element={<Fincharcha/>} />
      <Route path="/saarthi" element={<Saarthi/>} />
      <Route path="/aaganwadi" element={<Aaganwadi/>} />
    
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/testimonials" element={<Testimonial/>} />
      <Route path="/annual-report" element={<AnnualReport/>} />


      
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
) 