import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './pages/Layout'
import NewsSection from './pages/news/NewsPage'
import AdminPage from './pages/admin/AdminPage'
import Navbar from './components/Navbar'
import Match from './pages/match/Match'
import Summary from './pages/match/Summary'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:country/:league/:game/:matchID/match' element={<Match />}>
            {/* <Route index element={<Summary />} /> */}
            {/* <Route path='/stats' element={<Summary />} />
            <Route path='/lineup' element={<Summary />} />
            <Route path='/table' element={<Summary />} />
            <Route path='/news' element={<Summary />} />
            <Route path='/h2h' element={<Summary />} /> */}
          </Route>
        </Route>
        <Route path='news' element={<NewsSection />} />

        <Route path='/footballtic/private/admin' element={<AdminPage />} />
      </Routes>
    </>

  )
}

export default App