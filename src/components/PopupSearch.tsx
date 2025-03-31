"use client";
import React, { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

type PopupSearchProps = { show: boolean; toggle: () => void };

export const PopupSearch = ({ show, toggle }: PopupSearchProps) => {

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (show) {
          document.documentElement.style.overflow = 'hidden';
          document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
        } else {
          document.documentElement.style.overflow = "unset";
          document.documentElement.style.paddingRight = '0px';
        }
        return () => {
          document.documentElement.style.overflow = "unset";
          document.documentElement.style.paddingRight = '0px';
        };
      }, [show]);

  return (
    <div className={`popup-search-box ${show ? 'show' : 'hide'}`}>
      <button onClick={toggle} className="searchClose"><RxCross2 /></button>
      <form action="#">
        <input
          type="text"
          className="border-theme"
          placeholder="What are you looking for"
        />
        <button type="submit"><FaSearch /></button>
      </form>
    </div>
  )
}
