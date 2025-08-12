"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  ArchiveXIcon,
  DownloadCloud,
  Edit2Icon,
  Share2,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

interface ImageFormProps {
  id?: string;
  value: string;
  title: string;
  rounded: boolean;
  showModal: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  isshow?: boolean;
  docs?: string;
  handlerDelete?: () => void;
  handlerEdit?: () => void;
  handlerShare?: () => void;
  handlerDownload?: () => void;
}

const ImgModal: React.FC<ImageFormProps> = ({
  value,
  title,
  showModal,
  setShow,
  rounded,
  isshow,
  handlerDelete, 
  handlerEdit,
  handlerShare,
  handlerDownload,
  docs,
  id,
}) => {
  const appbarHeight = "3rem";
  const [ratio, setRatio] = useState<number>(0);
  const ConeinerElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (value) {
      const isMobile = window.innerWidth <= 768;
      const img = new Image();
      img.src = value;
      img.onload = () => {
        const screenWidth =
          ConeinerElement.current?.clientWidth ?? window.innerWidth;
        const screenHeightCon =
          ConeinerElement.current?.clientHeight ?? window.innerHeight;
        const w_ratio = img.width / (screenWidth ?? 0);
        const h_ratio = img.height / (screenHeightCon ?? 0);
        let ratiodef;

        if (isMobile) {
          ratiodef = 1 / Math.min(w_ratio, h_ratio * 0.8);
        } else {
          ratiodef = 1 / Math.max(w_ratio, h_ratio);
        }
        setRatio(ratiodef);
      };
    }
  }, [value]);

  const handleCloseDialog = () => {
    setShow(false);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        .react-transform-wrapper {
          justify-content:  'end' !important;
            display: flex !important;
        }
      `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Dialog open={showModal} onOpenChange={handleCloseDialog}>
      <DialogContent className="fixed border-0 gap-0 w-full h-full max-w-none max-h-none flex justify-center items-center bg-black/70 p-0 z-[80]">
        <DialogTitle></DialogTitle>
        <div className={` w-full h-${appbarHeight} flex flex-col`}>
          <div className="fixed -top-1 left-0 w-full z-50 bg-gray-800 text-white cursor-pointer p-2 flex justify-end items-center gap-6">
            {isshow == true && (
              <>
                <ArchiveXIcon
                  className="hover:text-red-500"
                  onClick={handlerDelete}
                />
                <Edit2Icon
                  className="hover:text-green-500"
                  onClick={handlerEdit}
                />
                <Share2
                  onClick={handlerShare}
                  className="hover:text-blue-500"
                />
                <DownloadCloud
                  className="hover:text-yellow-500"
                  onClick={handlerDownload}
                />
              </>
            )}
            <X className="hover:text-red-500" onClick={handleCloseDialog} />
          </div>

          {/* تصویر */}
          <div
            ref={ConeinerElement}
            className="w-full flex-grow relative  flex justify-center items-center"
            onClick={handleCloseDialog}
          >
            {docs && (
              <div
                onClick={(e) => e.stopPropagation()}
                className={`z-50 absolute bottom-1 border-2 p-4 text-black bg-white/70 right-1 shadow-lg rounded-2xl`}
              >
                {docs}
              </div>
            )}
            <TransformWrapper
              initialScale={ratio ? ratio : 1}
              key={ratio}
              minScale={0.5}
              maxScale={5}
              centerOnInit={true}
              centerZoomedOut={true}
              wheel={{ step: 1 }}
              doubleClick={{ mode: "zoomIn" }}
              pinch={{
                step: 0,
                disabled: false,
              }}
              zoomAnimation={{
                size: 0.01,
                animationTime: 10,
              }}
              alignmentAnimation={{
                velocityAlignmentTime: 0,
              }}
            >
              <TransformComponent>
                <div  onClick={(e) => e.stopPropagation()} className="h-[100svh] w-full flex justify-center items-center">
                  <img
                    src={value ? value : "placeholder.png"}
                    alt={title}
                    className={`object-contain ${
                      rounded ? "rounded-full" : ""
                    }`}
                  />
                </div>
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImgModal;
