"use client";
import Image from "next/image";
import React, { useState } from "react";

const BestShots = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = ["/images/bestshot.png", "/images/logo.png", "/images/background.png","/images/bestshot.png", "/images/logo.png", "/images/background.png"]

    // Function to go to the next image
    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log(imageIndex)
    };

    // Function to go to the previous image
    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
        console.log(imageIndex)

    };

    const handleImageClick = (index) => {
        setImageIndex(index)
    }

    return (
        <div className='relative w-screen h-[709px] bg-[#373633]'>
            <Image
                src={images[imageIndex]} 
                alt="Gallery Image"
                width={1000000} 
                height={10000000} 
                className="w-screen h-[470px]" 
            />
            <div className="flex ml-72 mt-6">
            {images.map((image, index) => (
                <div key={index} onClick={ () => handleImageClick(index)} className={`bg-[#786F52] rounded-full mr-4 ${ index !== imageIndex && "bg-opacity-50"}`} style={{
                    height: "12px",
                    width: "12px"

                }}></div>
            ))}
            </div>
            <div className="absolute right-0 bottom-[137px] h-[275px] w-[600px] bg-white flex flex-col items-start justify-center p-8" style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }}>
                <h1 className="font-caudex font-bold text-[45px] leading-[58px]" style={{ color: 'rgba(55, 54, 51, 0.8)', fontWeight: 700 }}>
                    Best Shots
                </h1>
                <p className="font-helvetica text-[22px] leading-[26px] max-w-md mt-4" style={{ color: 'rgba(55, 54, 51, 0.8)', fontWeight: 400 }}>
                    Explore the artistry behind each frame and discover why we&apos;re the trusted choice for capturing life&apos;s most precious moments.
                </p>
            </div>
            <div className="absolute bg-transparent right-[600px]" style={{
                width: 0,
                height: 0,
                bottom: '137px',
                borderTop: '137.5px solid transparent',
                borderRight: '155px solid white',
                borderBottom: '137.5px solid transparent',
            }}></div>
        </div>
    );
};

export default BestShots;
