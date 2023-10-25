import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import Education from "../Pages/Steps/Education/Education";
import HorizontalLinearStepper from "../Pages/Stepper/HorizontalLinearStepper";
import StepperLayout from "../Layout/StepperLayout";
import Agency from "../Pages/Agency/Agency";
import ClientStepperLaout from "../Layout/ClientStepperLaout";
import ClientStepper from "../Pages/ClientStepper/ClientStepper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "agency",
        element: <Agency />,
      },
      {
        path: "education",
        element: <Education></Education>,
      },
    ],
  },
  {
    path: "coder-steps",
    element: <StepperLayout></StepperLayout>,
    children: [
      {
        path: "/coder-steps",
        element: <HorizontalLinearStepper></HorizontalLinearStepper>,
      },
    ],
  },
  {
    path: "client-steps",
    element: <ClientStepperLaout></ClientStepperLaout>,
    children: [
      {
        path: "/client-steps",
        element: <ClientStepper></ClientStepper>,
      },
    ],

  }
]);
