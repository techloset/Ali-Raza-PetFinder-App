import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import AvilablePets from "./availablePetsForAdoption/AvailablePetsForAdoption";
import PlaningToAdoptPet from "./planingToAdoptPet/PlaningToAdoptPet";
import AvailPetsAdopt from "./availablePetsForAdoption/AvailablePetsForAdoption";
import DetailedPage from "./detailedPage/DetailedPage";
import PetCard from "./petCard/PetCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Index() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:animalId" element={<DetailedPage />} />
          <Route path="/availablepet" element={<AvilablePets />} />
          <Route path="/plantoadopt" element={<PlaningToAdoptPet />} />
          <Route path="/availablepetsadopt" element={<AvailPetsAdopt />} />
          <Route path="/petcard" element={<PetCard />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}
