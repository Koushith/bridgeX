/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
// import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { signInWithGoogle } from '@/utils'
import { useDispatch } from 'react-redux'
import { setCredials } from '@/redux/slices/auth/authSlice'
import { useRegisterUserMutation } from '@/redux/slices/auth/authApiSlice'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const dispatch = useDispatch()

    const [registerUser, { isError, isSuccess }] = useRegisterUserMutation();

  const submitHandler = async () => {
  
    const { user } = await signInWithGoogle()
    console.log(user)
    dispatch(setCredials(JSON.stringify(user)))

    // if (user) {
    //  const res = await registerUser("koushith", "email", ["walletAddress"], "jwtToken").unwrap()

    //  console.log(res)
    // }
    console.log(user)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div >
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <Button disabled={isLoading} onClick={submitHandler}>
            {isLoading && <div className='mr-2 h-4 w-4 animate-spin' />}
            Sign In with Google
          </Button>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button variant='outline' type='button' disabled={isLoading}>
        {isLoading ? (
          <div className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <div className='mr-2 h-4 w-4' />
        )}{' '}
        Github
      </Button>
    </div>
  )
}
