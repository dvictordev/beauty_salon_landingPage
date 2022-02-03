import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { Services } from './views/Services'
import { Contact } from './views/Contact'
import Logo from './assets/images/Logo.svg'

import './assets/styles/header.css'
import { Footer } from './views/Footer'
import { About } from './views/About'

export default function AppRoutes() {
  return (
    <Router>
      <header className="header">
        <img src={Logo} alt="" />
        <ul className="nav navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/Services">Serviços</Link>
          </li>
          <li>
            <Link to="/Depoimentos">Depoimentos</Link>
          </li>
          <li>
            <Link to="/Contact">Contato</Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/about" element={<About />} />

        <Route path="/Services" element={<Services />} />
        <Route
          path="/Contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}
