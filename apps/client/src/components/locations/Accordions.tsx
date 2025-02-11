import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Star from "../../assets/images/star.svg" ;

interface Props{
    destinations: { id: number; name: string; description: string; type: string }[]
    hotels: { id: number; name: string; rating: number; address: string; price_per_night: number }[]
}

export default function Accordions(props: Props)  {
    return (
      <>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-around sm:items-start">
        <div>
        <Accordion type="single" defaultValue="item-1" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Destinations</AccordionTrigger>
                <AccordionContent>
                <div className="flex flex-col">
                    {props.destinations.map((destination) => {
                        return (<>
                        <div className='flex justify-between flex-col m-1 rounded-md p-2 border-solid border-gray-300 shadow-md hover:cursor-pointer hover:shadow-lg'>
                        <div className="font-semibold" key={destination.id}>{destination.name}</div>
                        <div className="font-mono" key={`${destination.id}-description`}>{destination.description}</div>
                        <div className="text-xs opacity-50 uppercase font-medium" key={`${destination.id}-type`}>{destination.type}</div>
                        </div>
                        </>)
                    })}
                </div>
                </AccordionContent>
            </AccordionItem>
      </Accordion>
        </div>
        <div>
        <Accordion type="single" defaultValue="item-2" collapsible className="w-full">
            <AccordionItem value="item-2">
                <AccordionTrigger>Hotels</AccordionTrigger>
                <AccordionContent>
                <div>
                  {props.hotels.map((hotel) => {
                    return (<>
                    <div className='flex justify-between flex-col m-1 rounded-md p-2 border-solid border-gray-300 shadow-md hover:cursor-pointer hover:shadow-lg' key={hotel.id}>
                    <div className="font-semibold" key={hotel.id}>{hotel.name}</div>
                    <div className="flex items-center gap-1 m-1" key={hotel.id}><img src={Star} alt="star" height={24} width={24}/>{hotel.rating}</div>
                    <div className="font-mono font-semibold opacity-80 " key={`${hotel.id}-price`}>${hotel.price_per_night}/night</div>
                    <div className="text-xs opacity-50 uppercase font-medium" key={`${hotel.id}-address`}>{hotel.address}</div>
                    </div>
                    </>)
                    })}
                  </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
      </div>
      </>
    )
  }