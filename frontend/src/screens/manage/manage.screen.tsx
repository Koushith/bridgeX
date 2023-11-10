import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { AccountCard } from "./account-card.component"
import { AddNewDialog } from "./add-new.component"
import { DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export const ManageScreen = () => {
  const [open, setOpen] = useState(false)

  const addNewAddressHandler = () => {
    setOpen((o) => !o)
  }
  return (
    <>
      <AddNewDialog open={open} onOpenChange={setOpen} />
      <div className='rounded-xl border bg-card text-card-foreground  w-[800px] mt-4'>
        <div className='flex flex-col space-y-1.5 p-6'>
          <h3 className='font-semibold leading-none tracking-tight'>
            Accounts
          </h3>
          <p className='text-sm text-muted-foreground'>
            All Whitelisted accounts
          </p>

          <>
            <Tabs defaultValue='all' className='w-full '>
              <div className='flex items-center justify-between mt-8 '>
                <div className='flex space-x-4'>
                  <TabsList>
                    <TabsTrigger value='all' className='relative'>
                      All
                    </TabsTrigger>
                    <TabsTrigger value='individual'>Individual</TabsTrigger>
                    <TabsTrigger value='org'>Organization</TabsTrigger>
                  </TabsList>
                </div>
                <div className='ml-4'>
                  <Button onClick={addNewAddressHandler}>
                    <PlusCircledIcon className='mr-2 h-4 w-4' />
                    Add New Address
                  </Button>
                </div>
              </div>

              <div className='mt-8'>
                <TabsContent value='all'>
                  <AccountCard name='Koushith' ens='koushith.eth' />
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                </TabsContent>

                <TabsContent value='individual'>
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />
                </TabsContent>

                <TabsContent value='org'>
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />{" "}
                  <AccountCard name='Koushith' ens='koushith.eth' />
                </TabsContent>
              </div>
            </Tabs>
          </>
        </div>
      </div>
    </>
  )
}
