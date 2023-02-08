import React, { useState, useEffect } from 'react';


const API_KEY = 'AIzaSyDF6FO3JnyR3jxYqqSFawYl-3HKzebrG30'

const ImageAPI = () => {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('ski resort');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchTerm}&key=${API_KEY}`
      );
      const data = await response.json();
      setPlaces(data.results);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {places.map(place => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageAPI;
