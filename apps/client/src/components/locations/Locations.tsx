import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Earth } from "lucide-react"
 
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Header } from "../header"
import Cards from "./Cards"
import { Footer } from "../footer"
 

export const Locations = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <>
    <Header />
    <div className="flex gap-4 justify-evenly items-center w-screen mb-4">
      <div className="flex flex-col justify-around gap-2">
        <div className="text-4xl font-bold">Discover Locations</div>
        <div>
        <ToggleGroup type="single">
          <ToggleGroupItem value="all" aria-label="Toggle all">
            <Earth className="h-4 w-4" />
            All
          </ToggleGroupItem>
      <ToggleGroupItem value="bold" aria-label="Africa">
        Africa
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="America">
        America
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Asia">
        Asia
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Australia">
        Australia
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Africa">
        Europe
      </ToggleGroupItem>
    </ToggleGroup>
        </div>
      </div>
      <div>
      <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    </div>
    <Cards />
    <Footer />
    </>
  )
}
