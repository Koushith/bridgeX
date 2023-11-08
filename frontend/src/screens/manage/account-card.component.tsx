export const AccountCard = ({ name, address, ens }: any) => {
  return (
    <div className=' pt-0 grid gap-6 mb-6'>
      <div className='flex items-center justify-between space-x-4'>
        <div className='flex items-center space-x-4'>
          <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>
            <img
              className='aspect-square h-full w-full'
              src='https://pbs.twimg.com/profile_images/1643941027898613760/gyhYEOCE_400x400.jpg'
            />
          </span>
          <div>
            <p className='text-sm font-medium leading-none'>{name}</p>
            <p className='text-sm text-muted-foreground'>
              {ens ? ens : address}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
