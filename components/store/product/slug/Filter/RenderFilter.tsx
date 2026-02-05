import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/useFilterStore";
import { useState } from "react";

type FilterItemProps = {
  type: string;
  label: string;
  options?: { id: number; label: string; value?: string }[];
  id: string;
  min?: number;
  max?: number;
  isShowItem?: boolean;
};

export function FilterItem({
  type,
  label,
  options,
  id,
  min,
  max,
  isShowItem,
}: FilterItemProps) {
  const [valueRange, setValueRange] = useState("");
  const { filters, setFilter } = useFilterStore();

  switch (type) {
    case "color":
      return (
        <Accordion
          type="single"
          collapsible
          defaultValue={isShowItem ? label : ""}
        >
          <AccordionItem value={label}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-3 gap-3">
                {options?.map((opt) => {
                  const isActive = filters[id] === opt.value;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setFilter(id, opt.value || null)}
                      className={cn(
                        "flex flex-col items-center justify-center border rounded-md p-2 aspect-square transition",
                        isActive && "ring-2 ring-blue-500"
                      )}
                    >
                      <div
                        className="w-8 h-8 rounded-full border"
                        style={{ backgroundColor: opt.value }}
                      />
                      <span className="text-[10px] mt-1">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

    case "checkbox":
      return (
        <Accordion
          type="single"
          collapsible
          defaultValue={isShowItem ? label : ""}
        >
          <AccordionItem value={label}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {options?.map((opt) => {
                  const value = filters[id] as string | null;
                  const checked = value === opt.label;
                  return (
                    <label key={opt.id} className="flex items-center gap-2">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(c) =>
                          setFilter(id, c ? opt.label : null)
                        }
                      />
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

    case "multi-checkbox":
      return (
        <Accordion
          type="single"
          collapsible
          defaultValue={isShowItem ? label : ""}
        >
          <AccordionItem value={label}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {options?.map((opt) => {
                  const selected = (filters[id] as string[]) || [];
                  const checked = selected.includes(opt.label);
                  return (
                    <label key={opt.id} className="flex items-center gap-2">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(c) => {
                          let updated = [...selected];
                          if (c) updated.push(opt.label);
                          else updated = updated.filter((x) => x !== opt.label);
                          setFilter(id, updated);
                        }}
                      />
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

    case "switch":
      return (
        <div className="w-full flex justify-between items-center border-b py-3">
          <h2>{label}</h2>
          <Switch dir="ltr" onCheckedChange={(c) => setFilter(id, c)} />
        </div>
      );

    case "Range":
      return (
        <div className="w-full flex justify-between items-center border-b py-3">
          <h2>{label}</h2>
          <Input
            dir="ltr"
            type="range"
            value={valueRange}
            onChange={(e) => (
              setValueRange(e.target.value), setFilter(id, valueRange)
            )}
            className="w-full"
            min={min}
            max={max}
          />
          <span>{valueRange && valueRange + "000"}</span>
        </div>
      );

    default:
      return null;
  }
}
