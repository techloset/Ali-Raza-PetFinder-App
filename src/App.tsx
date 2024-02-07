import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import Header from './Components/Header/Header';
import Routes from "../src/Pages/Routes"
import Footer from './Components/Footer/Footer';
import { getAnimals } from './redux/userSlice';

function App() {
  // const dispatch = useAppDispatch()
  // const user = useAppSelector(state => state.user.data)

  // useEffect(() => {
  //   dispatch(getAnimals())
  // }, [])
  // console.log(user)
  return (
    <>
      {/* <Header />
      <Routes />
      <Footer /> */}
      <Routes />
    </>
  )
}

export default App;
