import App from "@/App";
import {
  AuthScreen,
  HomeScreen,
  ManageScreen,
  NotificationScreen,
  ProfileScreen,
  TransactionsScreen,
} from "@/screens";
import { createBrowserRouter } from "react-router-dom";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/auth",
        element: <AuthScreen />,
      },
      {
        path: "/manage",
        element: <ManageScreen />,
      },
      {
        path: "/notifications",
        element: <NotificationScreen />,
      },
      {
        path: "/transactions",
        element: <TransactionsScreen />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
    ],
  },
]);
