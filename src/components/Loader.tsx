"use client";
import React, { useEffect, useState } from "react";

interface PageLoaderProps {
  children: React.ReactNode;
}

export const Loader: React.FC<PageLoaderProps> = ({ children }) => {
  const [loading, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return loading ? (
    <div className="preloader">
      <div className="preloader-inner">
        <span className="loader"></span>
      </div>
    </div>
  ) : (
    children
  );
};
