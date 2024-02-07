import React from 'react'
import { Route , Routes} from 'react-router-dom'
import SignIn from './signIn/SignIn'
import SignUp from './signUp/SignUp'

export default function Index() {
  return (
    <>
    <Routes>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}
