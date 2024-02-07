import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import AvilablePets from './AvailablePetsForAdoption/AvailablePetsForAdoption'
import PlaningToAdoptPet from './planingToAdoptPet/PlaningToAdoptPet'
import AvailPetsAdopt from './AvailablePetsForAdoption/AvailablePetsForAdoption'
import DetailedPage from "./detailedPage/index"
import PetCard from './petCard/PetCard'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Index() {
  return (
    <>
      <main>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:animalId' element={<DetailedPage />} />
          <Route path='/availablepet' element={<AvilablePets />} />
          <Route path='/plantoadopt' element={<PlaningToAdoptPet />} />
          <Route path='/availablepetsadopt' element={<AvailPetsAdopt />} />
          <Route path='/petcard' element={<PetCard />} />
        </Routes>
        <Footer/>
      </main>
    </>
  )
}