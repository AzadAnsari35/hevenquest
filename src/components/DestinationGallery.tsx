"use client";
import { gallery } from "@/model";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import FullscreenModal from "./FullScreenModal";
import type { DestinationGallery as DG } from "@/interface";

export const DestinationGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const setImage = (index: number) => {
    setImageIndex(index);
    setIsOpen(!isOpen);
  };

  const resetImage = () => {
    setImageIndex(0);
    setIsOpen(!isOpen);
  };
  return (
    <div className="vs-destination-gallery-style1 overflow-hidden">
      <div className="row destination-gallery">
        <div className="col-lg-6 p-0">
          <div className="destination-gallery-box h-100">
            <Image
              src={gallery[0].img || ""}
              alt="destination-gallery"
              className="w-100 h-100"
              width={600}
              height={300}
            />
            {/* <div className="icon-box">
              <span className="cursor-pointer eye" onClick={() => setImage(0)}>
                <FaRegEye className="eye" size={30} color="white" />
              </span>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            {gallery.slice(1).map((item: DG, index: number) => (
              <div key={item.id} className="col-sm-6 p-0">
                <div className="destination-gallery-box h-100">
                  <Image
                    src={item.img || ""}
                    alt="destination-gallery"
                    className="w-100"
                    style={{
                      height: "300px",
                      width: "auto",
                      objectFit: "cover",
                    }}
                    width={600}
                    height={300}
                  />
                  {/* <div className="icon-box">
                    <span
                      className="cursor-pointer"
                      onClick={() => setImage(index + 1)}
                    >
                      <FaRegEye className="eye" size={30} color="white" />
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FullscreenModal
        isOpen={isOpen}
        imageIndex={imageIndex}
        setImage={setImageIndex}
        resetImage={resetImage}
      />
    </div>
  );
};
