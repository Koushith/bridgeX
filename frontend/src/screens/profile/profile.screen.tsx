import { useGetAllUsersQuery } from "@/redux/slices/auth/authApiSlice"

export const ProfileScreen = () => {
  const { data: pro, isError, isLoading } = useGetAllUsersQuery("User")

  console.log("datatatata", pro, isLoading)
  return <>Coming Soon</>
}
