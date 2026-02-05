"use client"

import * as React from "react"
import { Search } from "lucide-react"
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchCommandProps {
  placeholder?: string
  isFull?:boolean
}

export function SearchCommand({ placeholder = "Search...",isFull }: SearchCommandProps) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`relative ${isFull ? 'w-full':"w-40 md:w-[20rem]"} `}>

      <div
        className="relative z-50 bg-(--ColorBase) rounded"
        onClick={() => setOpen(true)}
      >
        <Search
          className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={16}
        />
        <Input
          placeholder={placeholder}
          className="pl-8 cursor-pointer"
        />
      </div>

      {open && (
        <>
          <div onClick={()=>setOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
        <div
          className={cn(
            "absolute left-0 right-0 top-full z-50 mt-1 rounded-md border bg-popover text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 max-h-60 overflow-auto"
          )}
          >
          <Command>
            <CommandList>
              <CommandEmpty>هیچ موردی پیدا نشد</CommandEmpty>

              <CommandGroup heading="دسته‌بندی‌ها">
                <CommandItem>محصولات</CommandItem>
                <CommandItem>سفارشات</CommandItem>
                <CommandItem>کاربران</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
          </>
      )}
    </div>
  )
}
