import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Report from "./features/dashboard/reports";
import Analytics from "./features/dashboard/analytics";
import Leads from "./features/dashboard/leads";
import Overview from "./features/dashboard/overview";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "overview", index: true, element: <Overview /> },
      { path: "analytics", element: <Analytics /> },
      { path: "leads", element: <Leads /> },
      { path: "reports", element: <Report /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
