"use client";

import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef, useState } from "react";

export function DrawerMobaile({
  open,
  setOpen,
  children,
  Desc,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  Desc?: boolean;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const isDragging = useRef(false);
  const animationFrame = useRef<number | null>(null);
  const [drawerHeight, setDrawerHeight] = useState(70); // درصد ارتفاع

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null || !isDragging.current) return;

    if (animationFrame.current) return;

    animationFrame.current = requestAnimationFrame(() => {
      const delta = startY.current! - e.touches[0].clientY;
      const newHeight = Math.min(
        100,
        Math.max(40, drawerHeight + (delta / window.innerHeight) * 100)
      );
      setDrawerHeight(newHeight);
      animationFrame.current = null;
    });
  };

  const handleTouchEnd = () => {
    startY.current = null;
    isDragging.current = false;
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  };

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerContent
        ref={drawerRef}
        className="transition-all duration-300 ease-out max-w-[var(--containerSize)] mx-auto"
        style={{
          zIndex: 80,
          height: `${drawerHeight}vh`,
          maxHeight: "100vh",
          touchAction: "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full h-full flex flex-col">

          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>

          <ScrollArea className="flex-1 px-4">{children}</ScrollArea>

          <DrawerFooter>{/* دکمه‌ها اینجا */}</DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
