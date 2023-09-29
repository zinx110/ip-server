import MainComp from "@/components/MainComp";
import axios from "axios";

import { headers } from "next/headers";
import Image from "next/image";

const fetchLocation = async (ip: string): Promise<any> => {
    const options = {
        method: "GET",
        url: "https://ip2location-io-ip-geolocation.p.rapidapi.com/",
        params: {
            key: process.env.NEXT_PUBLIC_GOOGLE_IP2LOCATION_API_KEY,
            ip: ip,
            format: "json",
        },
        headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GOOGLE_X_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_GOOGLE_X_RAPID_API_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default async function Home() {
    const ip = await headers().get("x-forwarded-for");
    const data = await fetchLocation(ip);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-24 p-5">
            <MainComp data={data.data} />
        </main>
    );
}
