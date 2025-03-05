'use client'

import { useState } from 'react'
import { FiStar, FiMapPin, FiSearch, FiFilter } from 'react-icons/fi'
import type { Hotel } from '../../../types'
import { Header } from '../header'
import { Footer } from '@/components/footer'
const Hotels = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSort, setSelectedSort] = useState('price')
  
  const hotels: Hotel[] = [
    {
      id: 1,
      name: 'Luxury Resort & Spa',
      location: 'Bali, Indonesia',
      rating: 4.8,
      price: 299,
      image: '/images/hotel-1.jpg',
      amenities: ['Pool', 'Spa', 'Restaurant', 'Beach View']
    },
    {
      id: 2,
      name: 'Urban City Hotel',
      location: 'New York, USA',
      rating: 4.5,
      price: 199,
      image: '/images/hotel-2.jpg',
      amenities: ['Free WiFi', 'Gym', 'Bar', 'Conference Room']
    },
  ]

  const filteredHotels = hotels
    .filter(hotel => 
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => selectedSort === 'price' ? a.price - b.price : b.rating - a.rating)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Perfect Stay</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search hotels or locations..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <FiFilter className="text-gray-600" />
              <select 
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="price">Price: Low to High</option>
                <option value="rating">Rating: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  <FiMapPin className="inline mr-1" /> {hotel.location}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center text-orange-500">
                    <FiStar className="mr-1" />
                    <span>{hotel.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity: string) => (
                    <span 
                      key={amenity}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ${hotel.price}
                    </span>
                    <span className="text-gray-500"> / night</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hotels