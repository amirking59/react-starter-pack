import { createBrowserRouter } from "react-router-dom";

import App from '../App.jsx'
import Page404 from '../pages/Page404.jsx'

export default createBrowserRouter([{
  path: '/',
  element: <App />
}, {
  path: '*',
  element: <Page404 />
}])


