import React, { useState, useEffect } from 'react';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:8000/hotels/");
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        const data = await response.json();
        if (data.results && Array.isArray(data.results)) {
          setHotels(data.results);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("An error occurred while fetching hotels:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Hotels</h2>
      {isLoading ? <p className="text-gray-500">Loading hotels...</p> : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {hotels.map(hotel => (
            <li key={hotel.id} className="border p-2 rounded hover:shadow-lg">
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p className="text-gray-500">{hotel.city}</p>
              <p>{hotel.description}</p>
              <img src={hotel.image_url} alt={hotel.name} className="w-full h-64 object-cover mt-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelList;
