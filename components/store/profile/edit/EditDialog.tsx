"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type Props = {
  open: boolean;
  onClose: () => void;
  fieldKey: string | null;
  defaultValue?: string;
  onSave: (data: any) => void;
};

export default function EditDialog({
  open,
  onClose,
  fieldKey,
  defaultValue,
  onSave,
}: Props) {
  const [form, setForm] = useState<Record<string, string>>({});
  useEffect(() => {
    setForm({});
  }, [fieldKey, open]);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  const renderFields = () => {
    switch (fieldKey) {
      case "password":
        return (
          <>
            <div className="w-full flex justify-center flex-col gap-2">
              <label className="text-sm font-medium">رمز جدید</label>
              <Input
                type="password"
                placeholder={"رمز جدید"}
                value={form.newPassword || ""}
                onChange={(e) => handleChange("newPassword", e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center flex-col gap-2">
              <label className="text-sm font-medium mt-3">
                رمز قبلی
              </label>
              <Input
                type="password"
                placeholder={"رمز قبلی"}
                value={form.repeatPassword || ""}
                onChange={(e) => handleChange("repeatPassword", e.target.value)}
              />
            </div>
          </>
        );

      case "name":
        return (
          <>
            <div className="w-full flex justify-center flex-col gap-2">
              <label className="text-sm font-medium">نام نام و خانوادگی</label>
              <Input
                type="text"
                placeholder={"نام نام خانوادگی"}
                value={form.fullname || defaultValue || ""}
                onChange={(e) => handleChange("fullname", e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center flex-col gap-2">
              <label className="text-sm font-medium mt-3">
               تاریخ تولد
              </label>
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="w-full flex justify-center flex-col gap-2">
              <label className="text-sm font-medium">مقدار جدید</label>
              <Input
                type="text"
                value={form.value || defaultValue || ""}
                onChange={(e) => handleChange("value", e.target.value)}
                placeholder={"مقدار جدید"}
              />
            </div>
          </>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-right">ویرایش اظلاعات</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 py-2">{renderFields()}</div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
           برگشت
          </Button>
          <Button onClick={handleSave}>ذخیره</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
