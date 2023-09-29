"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const MainComp = ({ data }: any) => {
    return (
        <div className="relative w-full aspect-[16/9] ">
            <Image
                src="/assets/gojo.png"
                alt=""
                fill
                className="object-cover"
            />
            <div className="absolute text-black drop-shadow-md shadow-black w-full h-full flex flex-col justify-between items-center p-5">
                <p className="font-semibold text-2xl">
                    I`m Gojo and I got your IP Address Nes
                </p>
                <div className=" text-white drop-shadow-md shadow-black w-full  grid grid-cols-2 gap-1 items-center">
                    <p className="font-semibold text-lg">ip : {data?.ip}</p>
                    <p className="font-semibold text-lg">
                        country : {data?.country_name}
                    </p>
                    <p className="font-semibold text-lg">
                        region : {data?.region_name}
                    </p>
                    <p className="font-semibold text-lg">
                        city : {data?.city_name}
                    </p>
                    <p className="font-semibold text-lg">
                        latitude : {data?.latitude}
                    </p>
                    <p className="font-semibold text-lg">
                        longitude : {data?.longitude}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainComp;
