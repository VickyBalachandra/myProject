import React from 'react'
import Body from './Body'
import Home from '../MainFolder/Home'
import About from '../MainFolder/About'
import Contact from '../MainFolder/Contact'
import Passanger from '../MainFolder/Employee'
import { createBrowserRouter, RouterProvider } from'react-router-dom'

import Register from '../MainFolder/Register'
import Employee from '../MainFolder/Employee'
import EditEmployee from '../MainFolder/EditEmployee'
import Partner from '../MainFolder/Partner'
import Fly from '../MainFolder/Fly'



const App = () => {
  const router = createBrowserRouter([
    { 
      path:'/',
      element:<Body></Body>,
      children:[
        {
          path:'home',
          element:<Home></Home>
        },
        {
          path:'registration',
          element:<Register/>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/fly',
          element:<Fly></Fly>
        },
        {
          path:'/employee',
          element:<Employee/>
        },
        {
          path:'/editemployee/:id',
          element:<EditEmployee/>
        },
        {
          path:'partner',
          element:<Partner/>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App