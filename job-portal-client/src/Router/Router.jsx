import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import JobDetails from "../Pages/JobDetails";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/about",element: <About />},

      { path: "/post-job", element: <CreateJob /> },

      { path: "/my-job", element: <MyJobs /> },

      { path: "/salary", element: <SalaryPage /> },

      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },

      { path: "/job/:id", element: <JobDetails /> },

      { path: "/signup", element: <Signup /> }, /// new sign up

      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
