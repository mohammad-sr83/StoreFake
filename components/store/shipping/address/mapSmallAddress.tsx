"use client";
import MapComponent from "@/components/MapLeftet/MapLeftet";
import { ChevronLeft, MapPinHouse } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function MapSmallAddress({
  lat,
  lng,
  setStep,
  showOther,
  address,
  setAddress,
  defLat,
  defLng,
}: {
  lat: string | number;
  lng: string | number;
  defLat?: string | number;
  defLng?: string | number;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  showOther?: boolean;
  setStep: React.Dispatch<
    React.SetStateAction<
      "list" | "map" | "custom" | "saveAddress" | "PersonAddress"
    >
  >;
}) {
  const [geoJson, setGeoJson] = useState<any>(null);
  const fetchAddress = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=fa`,
        {
          headers: {
            "User-Agent": "MyApp (myemail@example.com)",
            "Accept-Language": "fa",
            Referer: "https://myapp.example.com",
          },
        }
      );

      const data = await response.json();

      if (!data.address) return data.display_name;

      const a = data.address;
      const parts = [
        a.city || a.town || a.village || "",
        a.suburb || a.neighbourhood || "",
        a.road || "",
      ].filter(Boolean);

      return parts.join("، ");
    } catch (error) {
      console.error("Error fetching address:", error);
      return null;
    }
  };

  useEffect(() => {
    if (lat && lng) {
      setGeoJson({
        type: "Point",
        coordinates: [Number(lng), Number(lat)],
      });
      if (address) return;
      fetchAddress(Number(lat), Number(lng)).then((address) => {
        setAddress(address);
      });
    }
  }, [lat, lng]);

  return (
    <>
      <div
        onClick={() => setStep("map")}
        className="h-full w-full rounded-md overflow-hidden cursor-pointer"
      >
        <MapComponent
          defLat={defLat}
          defLng={defLng}
          fillLat="Lat"
          fillLng="Lng"
          geoValue={geoJson ? JSON.stringify(geoJson) : undefined}
          editable={false}
        />
      </div>
      {showOther && (
        <div className="bg-gray-100 p-3 rounded-md text-sm text-start flex items-center gap-2">
          <MapPinHouse />
          {address}
        </div>
      )}
    </>
  );
}
