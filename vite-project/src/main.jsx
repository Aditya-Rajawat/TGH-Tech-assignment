import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bookmark from './components/Bookmark.jsx';
import Body from './components/Body.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/bookmarks",
        element:<Bookmark/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> 
  <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>
  // </React.StrictMode>
)


