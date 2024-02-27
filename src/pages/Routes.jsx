import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import DetailedPage from './detailedPage/DetailedPage'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:animalId" element={<DetailedPage />} />
      </Routes>
      <Footer />
    </>
  )
}

