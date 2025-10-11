"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import L, { LatLng } from "leaflet";

interface MapProps {
  fillLat: string;
  fillLng: string;
  setvalue?: (data: Partial<any>) => void;
  label?: string;
  geoValue?: string;

}

const MapComponent: React.FC<MapProps> = ({
  setvalue,
  fillLat,
  fillLng,


  geoValue,
}) => {
  const [coordinates, setCoordinates] = useState<LatLng | null>(null);
  const [userLocation, setUserLocation] = useState<LatLng | null>(null);

  const customIcon = new L.Icon({
    iconUrl: "/image/map-pin-black.svg",
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, 0],
  });

  const customIcon2 = new L.Icon({
    iconUrl: "/image/map-pin-red.svg",
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, 0],
  });

  const parseGeoJson = (geoJson: string) => {
    try {
      const geoData = JSON.parse(geoJson);
      if (geoData?.type === "Point" && geoData.coordinates) {
        return new LatLng(geoData.coordinates[1], geoData.coordinates[0]);
      }
    } catch (error) {
      console.error("Invalid GeoJSON format", error);
    }
    return null;
  };

  useEffect(() => {
    if (geoValue) {
      const parsedCoords = parseGeoJson(geoValue);
      if (parsedCoords) {
        setCoordinates(parsedCoords);
        setvalue?.({ [fillLng]: parsedCoords.lng, [fillLat]: parsedCoords.lat });
      }
    }
  }, [geoValue, setvalue, fillLat, fillLng]);

  const handleGetUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = new LatLng(pos.coords.latitude, pos.coords.longitude);
          setUserLocation(loc);
          setCoordinates(loc);
          setvalue?.({ [fillLng]: loc.lng, [fillLat]: loc.lat });
        },
        (err) => console.error("Error getting location", err)
      );
    }
  };

  function LocationMarker() {
    useMapEvent("click", (e) => {
      setCoordinates(e.latlng);
      setvalue?.({ [fillLng]: e.latlng.lng, [fillLat]: e.latlng.lat });
    });

    return (
      <>
        {coordinates && (
          <Marker position={coordinates} icon={customIcon}>
            <Popup>
              موقعیت انتخاب‌شده: {coordinates.lat.toFixed(4)},{" "}
              {coordinates.lng.toFixed(4)}
            </Popup>
          </Marker>
        )}
        {userLocation && (
          <Marker position={userLocation} icon={customIcon2}>
            <Popup>
              موقعیت فعلی شما: {userLocation.lat.toFixed(4)},{" "}
              {userLocation.lng.toFixed(4)}
            </Popup>
          </Marker>
        )}
      </>
    );
  }

  const MapControl = () => {
    const map = useMap();
    useEffect(() => {
      //@ts-ignore
      const locationButton = L.control({ position: "topright" });
      locationButton.onAdd = () => {
        const btn = L.DomUtil.create(
          "button",
          "leaflet-bar leaflet-control leaflet-control-custom"
        );
        btn.style.backgroundColor = "var(--ColorChat)";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.padding = "6px 12px";
        btn.innerHTML = "موقعیت فعلی";
        btn.onclick = () => {
          handleGetUserLocation();
          map.flyTo(userLocation ?? map.getCenter(), 12);
        };
        return btn;
      };
      locationButton.addTo(map);
      return () => {
        map.removeControl(locationButton);
      };
    }, [userLocation]);

    return null;
  };

  return (
   <div className="w-full h-[500px]">
          <MapContainer
            center={[35.6895, 51.389]}
            zoom={12}
            minZoom={5}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            <MapControl />
          </MapContainer>
        </div>
  );
};

export default MapComponent;
