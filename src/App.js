import Auth from "./pages/auth/auth"
// import Register from "./pages/register/register"
// import Profile from "./pages/profile/profile"
import Home from "./pages/home/Home"
// import Reels from "./pages/reels/Reels"
// import TrueLife from "./pages/true-life/TrueLife"
import { createBrowserRouter,RouterProvider, Navigate } from "react-router-dom";
import { AuthContext } from './controllers/authControllers';
import { useContext } from 'react';


function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/auth" />;
    }

    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/",
      element:(
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>)   
    },
  ]);

  return (
      <RouterProvider router = {router} />
  );
}

export default App;