import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'sonner';
import './App.css';
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {

  let router = createBrowserRouter([
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="bottom-right" />
    </>
  );
}

export default App