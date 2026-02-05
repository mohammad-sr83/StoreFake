"use client";
import React, { useState } from "react";
import MapSmallAddress from "./mapSmallAddress";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PersonGetAddress({
  lat,
  lng,
  setStep,
  address,
  setAddress,
}: {
  lat: string | number;
  lng: string | number;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<
    React.SetStateAction<
      "list" | "map" | "custom" | "saveAddress" | "PersonAddress"
    >
  >;
}) {
  const [form, setForm] = useState({
    mode: "Myself",
    nameAddress: "",
    phoneNumber: "",
    name: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4 p-2">
      <MapSmallAddress
        lat={lat}
        lng={lng}
        setStep={setStep}
        address={address}
        setAddress={setAddress}
        showOther={true}
      />
      <div className="w-full flex justify-start  flex-col gap-8">
        <div>
          <Label htmlFor="nameAddress">آدرس ها</Label>
          <Input
            id="nameAddress"
            name="nameAddress"
            value={form.nameAddress}
            onChange={handleChange}
            placeholder="وارد کردن آدرس ها"
          />
        </div>
        <span className="text-sm">توضیحات در مورد آدرس</span>
        <div className="px-8">
          <RadioGroup
            onValueChange={(value) => setForm({ ...form, mode: value })}
            defaultValue={form.mode}
            className="w-full flex justify-between text-start flex-col md:flex-row gap-2"
          >
            <div className="flex items-center space-x-2">
              <Label htmlFor="other">یکی دیگه تحویل میگیره</Label>
              <RadioGroupItem value="other" id="other" />
            </div>
            <div className="flex items-center space-x-2 border-b md:border-none pb-2 md:p-0">
              <Label htmlFor="Myself">خودم تحویل میگیرم</Label>
              <RadioGroupItem value="Myself" id="Myself" />
            </div>
          </RadioGroup>
        </div>
        {form.mode === "other" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="name">اسم کسی مه تحویل میگیره</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">شماره تلفن</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
