import CarouselCards from './Carousel';
import { Earth } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Header } from '../header';
import Cards from './Cards';
import { Footer } from '../footer';

export const Locations = () => {
  return (
    <>
      <Header />
      <div className="flex gap-4 justify-evenly items-center w-screen mb-4 ">
      <div>
          <CarouselCards />
        </div>
        <div className="flex flex-col justify-around gap-2 absolute ">
          <div className="text-4xl font-bold">Discover Locations</div>
        </div>
      </div>
      <div className='mb-4'>
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
      <Cards />
      <Footer />
    </>
  );
};
