import { HomePage } from "./pages/homePage";
import { ContactPage } from "./pages/contactPage";
import { AboutUsPage } from "./pages/aboutUsPage";
import { OurWorkPage } from "./pages/ourWorkPage";
import { PartnersPage } from "./pages/partnersPage";
import { ProjectsPage } from "./pages/projectsPage";
import { ProjectDetailsPage } from "./pages/projectDetailsPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts";
import { EmployeesPage } from "./pages/employeesPage";
import { FourOhFourPage } from "./pages/fourOhFourPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        { element: <HomePage />, path: "/" },
        { element: <AboutUsPage />, path: "/aboutUs" },
        { element: <OurWorkPage />, path: "/ourWork/:param" },
        { element: <PartnersPage />, path: "/partners" },
        { element: <ProjectsPage />, path: "/projects" },
        { element: <EmployeesPage />, path: "/employees" },
        { element: <ProjectDetailsPage />, path: "/projectDetails" },
        { element: <ContactPage />, path: "/contact" },
      ],
    },
    { element: <FourOhFourPage />, path: "/*" },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
