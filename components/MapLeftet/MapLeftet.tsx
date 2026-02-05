"use client";
import L, { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";

interface MapProps {
  fillLat: string;
  fillLng: string;
  defLat?: string | number;
  defLng?: string | number;
  setvalue?: (data: Partial<any>) => void;
  geoValue?: string;
  editable?: boolean;
}

const MapComponent: React.FC<MapProps> = ({
  setvalue,
  fillLat,
  fillLng,
  geoValue,
  defLat,
  defLng,
  editable = true,
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
        setvalue?.({
          [fillLng]: parsedCoords.lng,
          [fillLat]: parsedCoords.lat,
        });
      }
    }
  }, [geoValue, setvalue, fillLat, fillLng]);

  useEffect(() => {
    if (!geoValue && defLat && defLng) {
      const defaultLat = Number(defLat);
      const defaultLng = Number(defLng);
      if (!isNaN(defaultLat) && !isNaN(defaultLng)) {
        const defCoords = new LatLng(defaultLat, defaultLng);
        setCoordinates(defCoords);
      }
    }
  }, [geoValue, defLat, defLng]);

  const handleGetUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = new LatLng(pos.coords.latitude, pos.coords.longitude);
          setUserLocation(loc);
          setCoordinates(loc);
          setvalue?.({
            [fillLng]: loc.lng,
            [fillLat]: loc.lat,
          });
        },
        (err) => {}
      );
    }
  };

  function LocationMarker() {
    const map = useMap();
    useEffect(() => {
      if (coordinates) {
        map.invalidateSize();
        map.setView(coordinates, 12);
      }
    }, [coordinates, map]);

    useEffect(() => {
      if (coordinates && !editable) {
        const timeout = setTimeout(() => {
          map.invalidateSize();
          map.setView(coordinates, 18);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [coordinates, editable, map]);

    useMapEvent("click", (e) => {
      if (!editable) return;
      setCoordinates(e.latlng);
      setvalue?.({
        [fillLng]: e.latlng.lng,
        [fillLat]: e.latlng.lat,
      });
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
        {editable && userLocation && (
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
      if (!editable) return;
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
    }, [userLocation, editable]);

    return null;
  };

  return (
    <div
      className={`w-full ${
        editable ? "h-full sm:h-[40rem]" : "h-[15rem] sm:h-[10rem]"
      } rounded-md overflow-hidden`}
    >
      <MapContainer
        center={
          coordinates ? [coordinates.lat, coordinates.lng] : [35.6895, 51.389]
        }
        zoom={!editable ? 13 : 18}
        minZoom={5}
        style={{ width: "100%", height: "100%" }}
        dragging={editable}
        scrollWheelZoom={editable}
        doubleClickZoom={editable}
        touchZoom={editable}
        zoomControl={editable}
        keyboard={editable}
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
