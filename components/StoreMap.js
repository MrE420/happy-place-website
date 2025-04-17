import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Need to initialize these variables outside the component
let L;
let defaultIcon;
let happyPlaceIcon;
let markerClusterGroup;

// MapController component for programmatically controlling the map
const MapController = ({ center, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    if (center && zoom) {
      map.flyTo(center, zoom, { 
        animate: true,
        duration: 1.5
      });
    }
  }, [center, zoom, map]);
  
  return null;
};

const StoreMap = ({ stores, selectedStore, onStoreSelect }) => {
  const [mapCenter, setMapCenter] = useState([37.7749, -122.4194]); // Default center (San Francisco)
  const [mapZoom, setMapZoom] = useState(5); // Default zoom level
  const [isLeafletLoaded, setIsLeafletLoaded] = useState(false);
  
  // Initialize Leaflet on client-side only
  useEffect(() => {
    // Initialize Leaflet only once on the client
    if (typeof window !== 'undefined' && !isLeafletLoaded) {
      // Dynamically import Leaflet
      L = require('leaflet');
      
      // Fix Leaflet default icon issue in Next.js
      defaultIcon = L.icon({
        iconUrl: '/assets/marker-icon.svg',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42],
        className: 'store-marker'
      });
      
      // Custom Happy Place marker icon
      happyPlaceIcon = L.icon({
        iconUrl: '/assets/marker-icon.svg',
        iconSize: [36, 48],
        iconAnchor: [18, 48],
        popupAnchor: [0, -42],
        className: 'happy-place-marker'
      });
      
      setIsLeafletLoaded(true);
    }
  }, [isLeafletLoaded]);
  
  // Update map center when a store is selected
  useEffect(() => {
    // Filter stores with coordinates
    const storesWithCoordinates = stores.filter(store => store.coordinates);
    
    if (selectedStore && selectedStore.coordinates) {
      setMapCenter(selectedStore.coordinates);
      setMapZoom(13); // Zoom in when a store is selected
    } else if (storesWithCoordinates.length > 0) {
      // Calculate center of all store locations that have coordinates
      const centerLat = storesWithCoordinates.reduce((sum, store) => sum + store.coordinates[0], 0) / storesWithCoordinates.length;
      const centerLng = storesWithCoordinates.reduce((sum, store) => sum + store.coordinates[1], 0) / storesWithCoordinates.length;
      
      setMapCenter([centerLat, centerLng]);
      
      // Set appropriate zoom level based on the number of stores
      setMapZoom(storesWithCoordinates.length === 1 ? 13 : storesWithCoordinates.length <= 3 ? 6 : 5);
    }
    // If no stores have coordinates, the default center will be used
  }, [selectedStore, stores]);
  
  if (!stores || stores.length === 0) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold text-green-800 mb-2">No Results</h3>
          <p className="text-green-700">Try a different search or zoom out your search area.</p>
        </div>
      </div>
    );
  }
  
  if (!isLeafletLoaded) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg h-[500px] flex items-center justify-center">
        <div className="text-green-700 flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Initializing map...
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <MapContainer 
        center={mapCenter} 
        zoom={mapZoom} 
        style={{ height: '400px', width: '100%' }}
        className="z-0 rounded-xl"
        scrollWheelZoom={false}
        tap={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Controller to update map position */}
        <MapController center={mapCenter} zoom={mapZoom} />
        
        {/* Render store markers (only for stores with coordinates) */}
        {stores.filter(store => store.coordinates).map(store => (
          <Marker 
            key={store.id}
            position={store.coordinates}
            icon={selectedStore && selectedStore.id === store.id ? happyPlaceIcon : defaultIcon}
            eventHandlers={{
              click: () => onStoreSelect(store)
            }}
          >
            <Popup>
              <div className="text-center p-1">
                <h3 className="font-bold text-green-800">{store.name}</h3>
                <p className="text-sm text-green-700">{store.address}</p>
                <p className="text-xs text-green-600 mt-1">{store.distance}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default StoreMap;