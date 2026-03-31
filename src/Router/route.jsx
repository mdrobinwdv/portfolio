import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import Abolut from "../components/Abolut";
import Contact from "../components/Contact";


const route = createBrowserRouter([
     {
          path: "/",
          element: <App/>,
          children: [
               {
                    path: "/",
                    element: <Home/>
               },
               {
                    path: "/about",
                    element: <Abolut/>
               },
               {
                    path: "/contact",
                    element:<Contact/>
               }
          ]
     }
])
export default route;