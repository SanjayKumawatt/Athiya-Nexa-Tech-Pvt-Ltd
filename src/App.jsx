import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Capabilities from './Pages/Capabilites'
import Workflows from './Pages/Workflow'
import Company from './Pages/Company'
import Beta from './Pages/Beta'
import Mission from './Pages/Mission'
import Privacy from './Pages/Privacy'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/capabilities",
          element:<Capabilities/>
        },
        {
          path:"/workflows",
          element:<Workflows/>
        },
        {
          path:"/company",
          element:<Company/>
        },
        {
          path:"/beta",
          element:<Beta/>
        },
        {
          path:"/mission",
          element:<Mission/>
        },
        {
          path:"/privacy",
          element:<Privacy/>
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