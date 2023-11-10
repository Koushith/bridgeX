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

export const Send = () => {
  const [date, setDate] = useState<Date>()

  return (
    <div>
      <Card className='shadow-none'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Send Payment</CardTitle>
          <CardDescription>
            Make Crypto payments witin few clicks!!
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Paying From</Label>
            <Input
              id='email'
              readOnly
              type='email'
              placeholder='0x9ccCA0a968A9bc5916E0de43Ea2D68321655ae67'
            />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='password'>Paying To *</Label>
            <div>
              <div className='flex  gap-4'>
                <Input
                  id='password'
                  type='password'
                  placeholder='koushith.eth'
                  className=''
                />
                <div className='flex gap-4'>
                  <Input
                    id='password'
                    type='password'
                    placeholder='0.005'
                    className='flex-1 w-[100px]'
                  />
                  <div className='flex-1'>
                    <Select>
                      <SelectTrigger className='w-[150px]'>
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
                </div>
              </div>
              <div className='mt-2'>
                <Button variant={"outline"}>
                  <PlusIcon className='w-[14px] h-[14px] mr-2' /> Add another
                  Reciepients
                </Button>
              </div>
            </div>
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='email'>Recurring Payment Date (Optional)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
        <CardFooter className='flex gap-4 '>
          {/* <Button variant={"secondary"} className=''>
            Cancel
          </Button> */}
          <Button className=''>Send Payment</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
