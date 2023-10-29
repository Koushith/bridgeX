import { cn } from '@/lib/utils'
// import { buttonVariants } from '@/registry/new-york/ui/button'
import { UserAuthForm } from './auth.form'
import { Link } from 'react-router-dom'

export const metadata: any = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export const AuthScreen = () => {
  return (
    <>
      <UserAuthForm />
    </>
  )
}
