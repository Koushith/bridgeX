import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountCard } from "../manage/account-card.component"
import { PlusCircledIcon, QuestionMarkIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Send } from "./send.component"
import { Recieve } from "./recieve.component"

export const HomeScreen = () => {
  return (
    <div className='rounded-xl border bg-card text-card-foreground  w-[800px] mt-4'>
      <div className='flex flex-col space-y-1.5 p-6'>
        {/* <h3 className='font-semibold leading-none tracking-tight'>Accounts</h3>
        <p className='text-sm text-muted-foreground'>
          All Whitelisted accounts
        </p> */}

        <>
          <Tabs defaultValue='send' className='w-full '>
            <div className='flex items-center justify-between mt-4 '>
              <div className='flex space-x-4'>
                <TabsList className='w-full'>
                  <TabsTrigger value='send' className=''>
                    Send
                  </TabsTrigger>
                  <TabsTrigger value='recieve'>Recieve</TabsTrigger>
                </TabsList>
              </div>
              <div className='ml-4'>
                <Button
                  variant={"ghost"}
                  onClick={() => "addNewAddressHandler"}
                >
                  <QuestionMarkIcon className='mr-2 h-4 w-4' />
                  Help
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <TabsContent value='send'>
                <Send />
              </TabsContent>

              <TabsContent value='recieve'>
                <Recieve />
              </TabsContent>
            </div>
          </Tabs>
        </>
      </div>
    </div>
  )
}
