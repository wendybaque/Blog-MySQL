import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";

const router = createBrowserRouter([
  {
    path:"/",
    element:<div>
    This is Home
  </div>,
  },
  {
    path:"/login",
    element:<Login />,
  },
  {
    path:"/register",
    element:<Register />,
  },
  {
    path:"/single",
    element:<Single />,
  },
  {
    path:"/write",
    element:<Write />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
