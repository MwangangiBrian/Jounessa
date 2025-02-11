import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { useState } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { ChevronsRight, Expand } from "lucide-react"
import Accordions from "./Accordions"

interface Props {
  country: string
  state: string
  city: string
  destinations: { id: number; name: string; description: string; type: string }[]
  hotels: { id: number; name: string; rating: number; address: string; price_per_night: number }[]
}

const LocationModal = (props: Props) => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
   
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default">
            View
            <Expand className="ml-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[80vw]">
          <DialogHeader>
            <DialogTitle>{props.country}</DialogTitle>
            <DialogDescription>
              {props.city}
            </DialogDescription>
          </DialogHeader>
          <Accordions destinations={props.destinations} hotels={props.hotels} />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline" className="min-w-fit max-w-[80vw]">Explore more<ChevronsRight /></Button>
            </DrawerClose>
          </DrawerFooter>
        </DialogContent>
      </Dialog>
    )
  }
   
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">View<Expand className="ml-2 h-4 w-4" /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{props.country}</DrawerTitle>
          <DrawerDescription>
            {props.city}
          </DrawerDescription>
        </DrawerHeader>
        <Accordions destinations={props.destinations} hotels={props.hotels} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="w-screen">Explore more<ChevronsRight /></Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
   
  
  
export default LocationModal