import { DashboardIcon } from '@radix-ui/react-icons';
import { HotelIcon, MapPin, LogOutIcon, Globe2Icon, Star } from 'lucide-react';
import Image from '../assets/images/JournessaLogo.png';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Tabs {
  name: string;
  icon: React.ElementType;
}

const tabs: Tabs[] = [
  {
    name: 'Overview',
    icon: DashboardIcon,
  },
  {
    name: 'Location',
    icon: Globe2Icon,
  },
  {
    name: 'hotels',
    icon: HotelIcon,
  },
  {
    name: 'Destinations',
    icon: MapPin,
  },
  {
    name: 'Reviews',
    icon: Star,
  },
];

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <Image />
          <h1>Jounessa</h1>
        </div>
        <div className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <div className="flex" key={tab.name}>
              <div>{<tab.icon />}</div>
              <div>{tab.name}</div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <Avatar>
              <AvatarImage src="https://placeholder.co/400" />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <LogOutIcon />
          </div>
        </div>
      </div>
    </>
  );
};
