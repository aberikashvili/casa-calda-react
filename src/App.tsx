import { OurWorkPage } from "./pages/ourWorkPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        { element: <OurWorkPage />, path: "/ourWork/:param" }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
