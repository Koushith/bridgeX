import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AddNewDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children?: React.ReactNode
}

export const AddNewDialog = ({
  open,
  onOpenChange,
  title,
  description,
  children,
}: AddNewDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='mt-4'>
        <DialogHeader className='p-4'>
          <DialogTitle>Add new contact</DialogTitle>
          <DialogDescription>
            This adds a new contact profile to your address book.
          </DialogDescription>
        </DialogHeader>
        <>
          <>
            <Card className='border-none'>
              <CardContent className=''>
                <div className='mt-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    defaultValue='Pedro Duarte'
                    className='mt-2'
                  />
                </div>
                <div className='mt-4'>
                  <Label htmlFor='username'>Username</Label>
                  <Input
                    id='username'
                    defaultValue='@peduarte'
                    className='mt-2'
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Save</Button>
              </CardFooter>
            </Card>
          </>
        </>
      </DialogContent>
    </Dialog>
  )
}
