import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { CalendarIcon, PlusIcon } from "lucide-react"
import { useState } from "react"

export const Recieve = () => {
  return (
    <div>
      <Card className='shadow-none'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Receive Payment</CardTitle>
          <CardDescription>
            Recieve Crypto payments witin few clicks!!
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Recieving Wallet Address</Label>
            <Input
              id='email'
              readOnly
              type='email'
              placeholder='0x9ccCA0a968A9bc5916E0de43Ea2D68321655ae67'
            />
          </div>

          <div className='grid gap-2'>
            <>
              <div className='flex  gap-4'>
                <div className='w-full'>
                  <Label htmlFor='password'>Recieving Token *</Label>
                  <Select>
                    <SelectTrigger className='w-[]'>
                      <SelectValue placeholder='Select Token' />
                    </SelectTrigger>
                    <SelectContent defaultValue={"Eth"}>
                      <SelectGroup>
                        <SelectLabel>Token</SelectLabel>
                        <SelectItem value='Eth'>Eth</SelectItem>
                        <SelectItem value='banana'>BNB</SelectItem>
                        <SelectItem value='blueberry'>USDT</SelectItem>
                        <SelectItem value='grapes'>DAI</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className='w-full'>
                  <Label htmlFor='password'>Recieving Chain *</Label>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select Chain' />
                    </SelectTrigger>
                    <SelectContent defaultValue={"Eth"}>
                      <SelectGroup>
                        <SelectLabel>Token</SelectLabel>
                        <SelectItem value='Eth'>Eth</SelectItem>
                        <SelectItem value='banana'>BNB</SelectItem>
                        <SelectItem value='blueberry'>USDT</SelectItem>
                        <SelectItem value='grapes'>DAI</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          </div>
        </CardContent>
        <CardFooter className='flex gap-4 '>
          {/* <Button variant={"secondary"} className=''>
            Cancel
          </Button> */}
          <Button className=''>Create Payment Link</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
