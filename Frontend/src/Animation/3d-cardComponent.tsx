"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../Animation/3d-card";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";
import img5 from "../assets/card5.png";
import img6 from "../assets/card6.png";
import { useAuth } from "../store/auth";

const serviceImg = [img1, img2, img3, img4, img5, img6];

export function ThreeDCardDemo() {
  const { services } = useAuth();

  return (
    <div className="inter-var grid grid-cols-1 md:grid-cols-2 p-6">
      {services.map((service, index) => (
        <CardContainer key={index}>
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-transform duration-300 ease-in-out transform hover:scale-105">
            <CardItem
              translateZ={50}
              className="text-xl font-bold text-neutral-600 dark:text-white"
              style={{ fontFamily: "Play" }}
            >
              {service.service}
            </CardItem>
            <CardItem
              as="p"
              translateZ={60}
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              style={{ fontFamily: "Play" }}
            >
              {service.description}
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <img
                src={serviceImg[index]}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl transition-transform duration-300 ease-in-out transform group-hover/card:scale-105"
                alt={`Service ${index + 1}`}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="p"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                in just <span className="text-[#E502B6]">{service.price}</span>
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
