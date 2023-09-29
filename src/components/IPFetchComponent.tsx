"use client";
import { useUserIp } from "@/hooks/useUserIP";
import React, { useEffect } from "react";

const IPFetchComponent = () => {
    const ip = useUserIp();
    useEffect(() => {
        console.log("IP: ", ip);
    }, [ip]);

    return <div>IPFetchComponent</div>;
};

export default IPFetchComponent;
