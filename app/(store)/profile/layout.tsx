"use client";

import HeaderStore from "@/components/store/component/headerItems/HeaderStore";
import CardProfile from "@/components/store/profile/CardProfile";


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div
      className={`w-full h-full lg:min-h-screen flex flex-col justify-between overflow-hidden sm:overflow-auto items-start mx-auto`}
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <div
        className={`w-full`}
      ><div className="w-full ">
        <HeaderStore/>
      </div>
        <div className="w-full lg:max-w-7xl mx-auto flex flex-col justify-start pt-0 lg:pt-6  items-end  gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-3">
            {children}
            <div className="w-full hidden lg:flex  sticky self-start top-14">
              <CardProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
