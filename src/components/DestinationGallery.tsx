import { gallery } from "@/model";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEye } from "react-icons/fa";

export const DestinationGallery: React.FC  = () => {
  return (
    <div className="vs-destination-gallery-style1 overflow-hidden">
      <div className="row destination-gallery">
        <div className="col-lg-6 p-0">
          <div className="destination-gallery-box h-100">
            <Image
              src={gallery.big.img}
              alt="destination-gallery"
              className="w-100 h-100"
              width={600}
              height={300}
            />
            <div className="icon-box">
              <Link
                href={gallery.big.img}
                title={gallery.big.title}
                className=""
              >
                <FaRegEye size={30} color="white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            {gallery.small.map((item) => (
              <div key={item.id} className="col-sm-6 p-0">
                <div className="destination-gallery-box h-100">
                  <Image
                    src={item.img}
                    alt="destination-gallery"
                    className="w-100 h-100"
                    style={{ height: "300px !important", objectFit: "cover" }}
                    width={600}
                    height={300}
                  />
                  <div className="icon-box">
                    <Link href={item.img} title={item.title} className="">
                      <FaRegEye size={30} color="white" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
