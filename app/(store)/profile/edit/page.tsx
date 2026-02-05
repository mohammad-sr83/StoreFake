"use client";

import { useState } from "react";
import { Pencil, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import EditDialog from "@/components/store/profile/edit/EditDialog";


export default function Page() {
  const [openField, setOpenField] = useState<string | null>(null);
  const [defaultValue, setDefaultValue] = useState<string | undefined>();
  const fields = [
    {
      key: "name",
      label: "نام و نام خانوادگی",
      value: "mohammad soleimanpour",
    },
    { key: "nationalCode", label: "کد ملی ", value: "0372595916" },
    { key: "email", label: "ایمیل", value: "" },
    {
      key: "mobile",
      label: "شماره تلفن",
      value: "09334907835",
      verified: true,
    },
    { key: "password", label: "رمز کاربری ", value: "••••••" },
    { key: "refund", label: "", value: "" },
    { key: "job", label: "شغل", value: "" },
    { key: "birthDate", label: "تولد", value: "", type: "data" },
    { key: "disability", label:"", value: "تعریف نشده" },
    { key: "economicCode", label: "کد معرف", value: "" },
  ];

  const handleOpen = (field: any) => {
    setDefaultValue(field.value);
    setOpenField(field.key);
  };

  const handleSave = (data: any) => {
    console.log("Saved:", openField, data);
    setOpenField(null);
  };

  return (
    <div className="w-full mx-auto  bg-white border rounded-lg  p-6">
      <div
        dir={"rtl"}
        className="grid grid-cols-2 divide-gray-200"
      >
        {fields.map((field, index) => (
          <div
            key={field.key}
            className={cn(
              "flex items-center justify-between py-4 px-6 border-b border-gray-100",
              index % 2 === 0 && "border-l"
            )}
          >
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">{field.label}</span>
              <span
                className={cn(
                  "font-medium text-gray-900",
                  !field.value && "text-gray-400 italic"
                )}
              >
                {field.value || "—"}
              </span>
              {field.verified && (
                <Badge className="mt-1 bg-green-500 hover:bg-green-500 text-white text-xs">
                  نظر ارسال شده 
                </Badge>
              )}
            </div>

            <div
              onClick={() => handleOpen(field)}
              className="text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              {field.value ? (
                <Pencil className="w-4 h-4" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </div>
          </div>
        ))}
      </div>

      <EditDialog
        open={!!openField}
        onClose={() => setOpenField(null)}
        fieldKey={openField}
        defaultValue={defaultValue}
        onSave={handleSave}
      />
    </div>
  );
}
