"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { gallery } from "@/model";

type FullScreenModalProps = {
  isOpen: boolean;
  imageIndex: number;
  setImage: (image: number) => void;
  resetImage: () => void;
};

const FullscreenModal = ({
  isOpen,
  imageIndex,
  setImage,
  resetImage,
}: FullScreenModalProps) => {
  const handlePrev = () => {
    if (imageIndex != 0) setImage(imageIndex - 1);
    else setImage(gallery.length - 1);
  };

  const handleNext = () => {
    if (imageIndex != gallery.length - 1) setImage(imageIndex + 1);
    else setImage(0);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.documentElement.style.overflow = "unset";
      document.documentElement.style.paddingRight = "0px";
    }
    return () => {
      document.documentElement.style.overflow = "unset";
      document.documentElement.style.paddingRight = "0px";
    };
  }, [isOpen]);

  return (
    <Modal
      className="fullScreenModalContainer"
      show={isOpen}
      fullscreen={true}
      onHide={resetImage}
    >
      <Modal.Header
        style={{ borderBottom: "none", backgroundColor: "transparent" }}
        closeButton
      ></Modal.Header>
      <Modal.Body>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <FaCaretLeft
            size={50}
            className="cursor-pointer"
            color="white"
            onClick={handlePrev}
            style={{ position: "absolute", left: "20px" }}
          />
          <Image
            src={gallery[imageIndex].img || ""}
            alt="Fullscreen"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
            height={1300}
            width={1300}
          />
          <FaCaretRight
            size={50}
            className="cursor-pointer"
            color="white"
            onClick={handleNext}
            style={{ position: "absolute", right: "20px" }}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FullscreenModal;
