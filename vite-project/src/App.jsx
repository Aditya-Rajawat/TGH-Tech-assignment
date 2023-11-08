import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bookmark from './components/Bookmark'

const App = () => {

  return (
    <Provider store={appStore}>
    <div className="w-[1512px] h-[982px] xsm:w-[360px] xsm:h-[640px] bg-gradient-to-r from-[#5E2AB2] to-[#161E6C]">
      <Navbar />
      <Outlet/>
    </div>
    </Provider>
  )
}





export default App