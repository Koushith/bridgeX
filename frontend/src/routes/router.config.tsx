import App from "@/App";
import {
  AuthScreen,
  HomeScreen,
  ManageScreen,
  NotificationScreen,
  ProfileScreen,
  SettingsScreen,
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
        path: "/address",
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
      {
        path: "/settings",
        element: <SettingsScreen />,
      },
    ],
  },
]);
