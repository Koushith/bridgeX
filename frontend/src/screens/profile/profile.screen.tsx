import { useGetAllUsersQuery } from '@/redux/slices/userSlice'

export const ProfileScreen = () => {
  const { data: pro, isError, isLoading } = useGetAllUsersQuery('User')

  console.log('datatatata', pro, isLoading)
  return <>jd</>
}
