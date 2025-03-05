import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Image } from '../ImageKit';

const CarouselCards = () => {
  const images = [
    'dubai-desert_ubAOm6bILK?updatedAt=1741178325538',
    'hot-air-balloon.jpg?updatedAt=1741181034825',
    'capetown.jpg?updatedAt=1741181034166',
    'pyramids.jpg?updatedAt=1741180837660',
    'shoreline.jpg?updatedAt=1741181351289',
  ];

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-min"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent className="w-full flex items-center justify-center">
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      h={200}
                      w={600}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default CarouselCards;
