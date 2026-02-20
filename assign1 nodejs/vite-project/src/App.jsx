import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SystemInfo from './components/SystemInfo'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'home' || hash === '') {
        setCurrentPage('home')
      } else if (hash === 'work') {
        setCurrentPage('work')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    
    // Check initial hash on mount
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      <Header />
      {currentPage === 'home' ? <Hero /> : <SystemInfo />}
    </>
  )
}

export default App
