import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { locations } from "@/lib/locations"

import LocationModal from "./LocationModal"
 

const Cards = () => {
    
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
    { locations.map((location) => (
      <Card className="w-[350px]" key={location.id}>
      <CardHeader>
        <CardTitle>{location.country}</CardTitle>
        <CardDescription>{location.city}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
            <LocationModal 
              country={location.country} 
              state={location.state} 
              city={location.city} 
              destinations={location.destinations} 
              hotels={location.hotels} 
            />
        
      </CardFooter>
    </Card>
    ))}
    </div>
    </>
  )
}

export default Cards