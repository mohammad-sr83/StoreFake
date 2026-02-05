"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import MapSmallAddress from "./mapSmallAddress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DataProvince } from "./DataProvince";
import { useTranslations } from "next-intl";

export default function SaveAddressComponent({
  lat,
  lng,
  setStep,
  address,
  setLat,
  setLng,
  setAddress,
}: {
  lat: string | number;
  lng: string | number;
  address: string;
  setLat: React.Dispatch<React.SetStateAction<string | number>>;
  setLng: React.Dispatch<React.SetStateAction<string | number>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<
    React.SetStateAction<
      "list" | "map" | "custom" | "saveAddress" | "PersonAddress"
    >
  >;
}) {
  const [form, setForm] = useState({
    province: "تهران",
    city: "",
    plaque: "",
    unit: "",
    postalCode: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const t = useTranslations("ToolsShippingStorePage");
  const handleSelectProvince = (value: string) => {
    const selected = DataProvince.find((item) => item.name === value);
    if (selected) {
      setLat(selected.lat);
      setLng(selected.lng);
    }
    setForm({ ...form, province: value });
  };

  const handleSelectCity = (value: string) => {
    setForm({ ...form, city: value });
  };

  return (
    <div className="space-y-4 p-2">
      <MapSmallAddress
        lat={lat}
        lng={lng}
        defLat={lat}
        defLng={lng}
        setStep={setStep}
        address={address}
        setAddress={setAddress}
      />

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-red-500">{t("province")}*</Label>
            <Select onValueChange={handleSelectProvince} value={form.province}>
              <SelectTrigger>
                <SelectValue placeholder={t("provinceSelect")} />
              </SelectTrigger>
              <SelectContent className="z-[73]">
                {DataProvince.map((item) => (
                  <SelectItem key={item.name} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-red-500">{t("city")}*</Label>
            <Select onValueChange={handleSelectCity} value={form.city}>
              <SelectTrigger>
                <SelectValue placeholder={t("citySeclet")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="تهران">تهران</SelectItem>
                <SelectItem value="کرج">کرج</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-red-500">{t("address")}*</Label>
          <Textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder={t("addressPlacholder")}
            className="resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">{t("addressDesc")}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-red-500">{t("plate")}*</Label>
            <Input
              name="plaque"
              value={form.plaque}
              onChange={handleChange}
              placeholder={t("platePlaceholder")}
            />
          </div>
          <div>
            <Label>{t("unit")}</Label>
            <Input
              name="unit"
              value={form.unit}
              onChange={handleChange}
              placeholder={t("unitPlaceholder")}
            />
          </div>
        </div>

        <div>
          <Label className="text-red-500">{t("zipCode")}*</Label>
          <Input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder={t("zipCodePlaceholder")}
          />
        </div>
      </form>
    </div>
  );
}
