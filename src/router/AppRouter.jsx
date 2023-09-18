import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import PrivateRouter from './PrivateRouter'

import News from '../pages/News'

const AppRouter = () => {
  return (
    <BrowserRouter>
     <Routes>
 
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={ < News/> } />
        </Route>

        <Route path="login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter