"use client";
import { Filter, SortDesc } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { FilterData } from "./FilterTopProduct";

import { filtersData } from "./FilterProduct";
import { FilterItem } from "./RenderFilter";
import { Badge } from "@/components/ui/badge";
import { useFilterStore } from "@/store/useFilterStore";
import { Button } from "@/components/ui/button";
import { DrawerBaseAll } from "../DrawerBase";

export default function FilterMobileProduct() {
  const [open, setOpen] = useState(false);
  const [children, setChildren] = useState(<div></div>);
  const { getActiveCount, clearFilters } = useFilterStore();
  const activeCount = getActiveCount();

  return (
    <>
      <div className="w-full overflow-auto flex justify-start items-center gap-2 hide-scrollbar sticky top-[4rem] lg:hidden p-2 z-50 bg-(--ColorBase)">
        <div
          onClick={() => {
            setOpen(true);
            setChildren(
              <>
                <div className="w-full flex justify-start  flex-col gap-3">
                  {FilterData.map((item) => (
                    <Link
                      key={item.id}
                      onClick={() => setOpen(false)}
                      className="w-full text-xs text-right whitespace-nowrap border-b pb-3 px-3"
                      href={`?sort=${item.sort}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            );
          }}
          className="flex text-nowrap justify-center items-center text-xs p-1.5 border rounded-2xl"
        >
          <SortDesc size={15} className="ml-1" />
          سورت بندی
        </div>
        <div
          onClick={() => {
            setOpen(true);
            setChildren(
              <div className="w-full px-3">
                {filtersData.map((filter) => (
                  <FilterItem key={filter.id} {...filter} />
                ))}
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => clearFilters()}
                >
                  حذف فیلتر ها
                </Button>
              </div>
            );
          }}
          className="flex relative text-nowrap justify-center items-center text-xs p-1.5 border rounded-2xl"
        >
          <Filter size={15} className="ml-1" />
          {activeCount > 0 && (
            <Badge className="h-5 min-w-5 absolute -top-2 -right-2 transition-all rounded-full text-center p-0 font-mono tabular-nums flex justify-center items-center">
              {activeCount}
            </Badge>
          )}
          فیلتر ها
        </div>
        {filtersData.map((filter) => (
          <div
            key={filter.id}
            onClick={() => {
              setOpen(true);
              setChildren(
                <div className="w-full px-3">
                  <FilterItem
                    isShowItem={true}
                    id={filter.id}
                    type={filter.type}
                    label={filter.label}
                    options={filter.options}
                  />
                </div>
              );
            }}
            className="flex text-nowrap justify-center items-center text-xs p-1.5 border rounded-2xl"
          >
            <Filter size={15} className="ml-1" />
            {filter.label}
          </div>
        ))}
      </div>
      <DrawerBaseAll
        open={open}
        setOpen={setOpen}
        children={children}
        title={"فیلتر ها"}
      />
    </>
  );
}
