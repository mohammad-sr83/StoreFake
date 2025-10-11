"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ArrayData } from "./StoryMode";

export default function DialogStoryMode({
  open,
  setOpen,
  initialId,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialId: number;
}) {
  const [currentId, setCurrentId] = useState(initialId);

  useEffect(() => {
    setCurrentId(initialId);
  }, [initialId]);

  const currentIndex = ArrayData.findIndex((item) => item.id === currentId);
  const data = ArrayData[currentIndex];

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < ArrayData.length - 1;

  const handlePrev = () => {
    if (hasPrev) setCurrentId(ArrayData[currentIndex - 1].id);
  };

  const handleNext = () => {
    if (hasNext) setCurrentId(ArrayData[currentIndex + 1].id);
  };

  const handleBack = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="max-w-[25rem] z-[72] h-full sm:h-2/3 w-screen p-0 bg-black/90 flex flex-col border-none items-center justify-center"
      >
        <DialogHeader className="w-full p-2 flex flex-row items-center justify-start gap-2 text-white">
          <ArrowLeft
            className={`cursor-pointer rotate-180`}
            onClick={handleBack}
          />
          <Avatar style={{ width: 48, height: 48 }}>
            <AvatarImage src={data.image} alt={data.title} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <DialogTitle>{data.title}</DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex items-center justify-center w-full">
          {data.video ? (
            <video
              src={data.video}
              className="h-full w-full rounded-lg"
              controls
              autoPlay
            />
          ) : (
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-full rounded-lg object-contain"
            />
          )}
        </div>

        <div className="absolute inset-y-0 right-2 flex items-center">
          {hasPrev && (
            <Button
              variant="secondary"
              size="icon"
              className="bg-gray-300 hover:bg-gray-200 text-black p-1 text-xs sm:text-base sm:p-3 rounded-full"
              onClick={handlePrev}
            >
              <ChevronRight />
            </Button>
          )}
        </div>

        <div className="absolute inset-y-0 left-2 flex items-center">
          {hasNext && (
            <Button
              variant="secondary"
              size="icon"
              className="bg-gray-300 hover:bg-gray-200 text-black p-1 text-xs sm:text-base sm:p-3 rounded-full"
              onClick={handleNext}
            >
               <ChevronLeft />
              
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
