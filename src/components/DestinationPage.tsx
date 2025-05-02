"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Breadcrumb from "@/components/Breadcrumb";

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  type: "hamilton" | "hashtag";
}

const allDestinations: Destination[] = [
  {
    id: 1,
    name: "Cygnett Resort Mountain Breeze - Nainital",
    location: "Nainital",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1735283062808_nn1.jpg",
    type: "hamilton",
  },
  {
    id: 2,
    name: "Shervani Hilltop Nainital",
    location: "Nainital",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1735282401186_n1.jpg",
    type: "hamilton",
  },
  {
    id: 3,
    name: "Divine Hotel and Resorts",
    location: "Gaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1729070559946_d4.jpg",
    type: "hamilton",
  },
  {
    id: 4,
    name: "Yashoda Resort Gaya",
    location: "Gaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728985835503_c1.jpg",
    type: "hamilton",
  },
  {
    id: 5,
    name: "Oaks Bodhgaya",
    location: "Gaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728984673301_g1.webp",
    type: "hamilton",
  },
  {
    id: 6,
    name: "Sevilla Center Hotel",
    location: "Sevilla",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728303164601_l1.jpg",
    type: "hamilton",
  },
  {
    id: 7,
    name: "Shiva Oasis Resort",
    location: "Neemrana",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728039072190_r1.jpg",
    type: "hamilton",
  },
  {
    id: 8,
    name: "Wood Creek Resort & Spa Kasauli",
    location: "Kasauli",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728038403847_q1.jpg",
    type: "hamilton",
  },
  {
    id: 9,
    name: "Courtyard by Marriott Bilaspur",
    location: "Bilaspur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728037302856_c1.jpg",
    type: "hamilton",
  },
  {
    id: 10,
    name: "The Lalita Grand",
    location: "Mathura",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728036423160_m1.jpg",
    type: "hamilton",
  },
  {
    id: 11,
    name: "Hotel Temple Tree",
    location: "Shirdi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728035954960_t1.jpg",
    type: "hamilton",
  },
  {
    id: 12,
    name: "Hotel Dwarka Park",
    location: "Shirdi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728035162601_s1.jpg",
    type: "hamilton",
  },
  {
    id: 13,
    name: "Hotel Millennium Park",
    location: "Panchgani",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728029555037_p1.webp",
    type: "hamilton",
  },
  {
    id: 14,
    name: "Stonewood Villa",
    location: "Ranikhet",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728028941758_d1.jpg",
    type: "hamilton",
  },
  {
    id: 15,
    name: "The Himalayan Voyage",
    location: "Ranikhet",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728027750524_k1.jpg",
    type: "hamilton",
  },
  {
    id: 16,
    name: "The Hill District Club",
    location: "Wayanad",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728024297381_h1.webp",
    type: "hamilton",
  },
  {
    id: 17,
    name: "Wayanad Silverwoods Resorts",
    location: "Wayanad",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728023840824_W1.webp",
    type: "hamilton",
  },
  {
    id: 18,
    name: "Moustache Rishikesh Riverside Resort",
    location: "Rishikesh",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728023334996_n1.jpg",
    type: "hamilton",
  },
  {
    id: 19,
    name: "Regenta inn On The Ganges",
    location: "Rishikesh",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728022918537_g1.jpg",
    type: "hamilton",
  },
  {
    id: 20,
    name: "Rosewood- Ooty by Nature Resort",
    location: "Ooty",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728022463407_r1.jpg",
    type: "hamilton",
  },
  {
    id: 21,
    name: "Hotel Lakeview",
    location: "Ooty",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728021174066_o1.webp",
    type: "hamilton",
  },
  {
    id: 22,
    name: "Shola Crown Resort",
    location: "Munnar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728020787082_1.webp",
    type: "hamilton",
  },
  {
    id: 23,
    name: "Gokulam  Park Munnar",
    location: "Munnar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728020357109_m1.jpg",
    type: "hamilton",
  },
  {
    id: 24,
    name: "Poppys Hotel",
    location: "Madurai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727868743360_m1.webp",
    type: "hamilton",
  },
  {
    id: 25,
    name: "Hotel Germanus",
    location: "Madurai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727868130641_g1.webp",
    type: "hamilton",
  },
  {
    id: 26,
    name: "kufri Pacific Resort",
    location: "Kufri",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727867484009_p1.jpg",
    type: "hamilton",
  },
  {
    id: 27,
    name: "Queen Himya Resort by DLS Hotels",
    location: "Kufri",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727866955112_k1.webp",
    type: "hamilton",
  },
  {
    id: 28,
    name: "The Fern Residency",
    location: "Haridwar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727864841349_f1.webp",
    type: "hamilton",
  },
  {
    id: 29,
    name: "Fortune Park Hotel",
    location: "Haridwar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727864358218_H1.webp",
    type: "hamilton",
  },
  {
    id: 30,
    name: "Honeymoon Inn Shimla",
    location: "Shimla",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727853447799_h1.jpg",
    type: "hamilton",
  },
  {
    id: 31,
    name: "Snow Valley Resorts Shimla",
    location: "Shimla",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727851070226_s1.jpg",
    type: "hamilton",
  },
  {
    id: 32,
    name: "Golden Tulip",
    location: "Kolkata",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727849738500_g1.webp",
    type: "hamilton",
  },
  {
    id: 33,
    name: "The Fern Residency",
    location: "Kolkata",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727849146437_k1.jpg",
    type: "hamilton",
  },
  {
    id: 34,
    name: "The Comfort Gir Resort",
    location: "Sasan Gir",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727782295782_t1.webp",
    type: "hamilton",
  },
  {
    id: 35,
    name: "Velvet Clarks Exotica",
    location: "Chandigarh",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727781714916_v1.webp",
    type: "hamilton",
  },
  {
    id: 36,
    name: "Ramada Plaza by Wyndham Chandigarh",
    location: "Chandigarh",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727779561601_c1.webp",
    type: "hamilton",
  },
  {
    id: 37,
    name: "Hotel Singhania Sarovar Portico",
    location: "Raipur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727778969748_r1.jpg",
    type: "hamilton",
  },
  {
    id: 38,
    name: "Saya ji Raipur",
    location: "Raipur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727778517840_1.webp",
    type: "hamilton",
  },
  {
    id: 39,
    name: "Hotel Grand Alleppey",
    location: "Alleppey",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727769937322_L1.jpg",
    type: "hamilton",
  },
  {
    id: 40,
    name: "Deshadan Backwater Resort",
    location: "Alleppey",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727769544525_a1.jpg",
    type: "hamilton",
  },
  {
    id: 41,
    name: "Ramada by Wyndham Gurugaon Central",
    location: "Gurugaon",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727768681592_1.jpg",
    type: "hamilton",
  },
  {
    id: 42,
    name: "Golden Suites Gurugram",
    location: "Gurugram",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727766632475_m1.webp",
    type: "hamilton",
  },
  {
    id: 43,
    name: "Regenta Central Udaipur",
    location: "Udaipur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727765927205_r1.webp",
    type: "hamilton",
  },
  {
    id: 44,
    name: "Sterling Puri",
    location: "Puri",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727765535485_s1.jpg",
    type: "hamilton",
  },
  {
    id: 45,
    name: "The Fern Residency Udaipur",
    location: "Udaipur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727765109853_u1.webp",
    type: "hamilton",
  },
  {
    id: 46,
    name: "Toshali Sands Puri",
    location: "Puri",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727764433988_t1.jpg",
    type: "hamilton",
  },
  {
    id: 47,
    name: "Ramada by Wyndham",
    location: "Khajuraho",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727763548720_k1.jpg",
    type: "hamilton",
  },
  {
    id: 48,
    name: "Hotel Kasturi Orchid Jodhpur",
    location: "Jodhpur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727762481361_j1.webp",
    type: "hamilton",
  },
  {
    id: 49,
    name: "The Fern Residency Jodhpur",
    location: "Jodhpur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727696522245_o1.jpg",
    type: "hamilton",
  },
  {
    id: 50,
    name: "Summit Namnang Courtyard & Spa",
    location: "Gangtok",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727690687290_g1.jpg",
    type: "hamilton",
  },
  {
    id: 51,
    name: "Lemon Tree Hotel",
    location: "Gangtok",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727691772524_1.jpg",
    type: "hamilton",
  },
  {
    id: 52,
    name: "Hotel Golden tulip Essential",
    location: "Jaipur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727610729071_jj.webp",
    type: "hamilton",
  },
  {
    id: 53,
    name: "The Fern Residency , Jaipur",
    location: "Jaipur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727609853943_j1.webp",
    type: "hamilton",
  },
  {
    id: 54,
    name: "The Golden Crown Hotel",
    location: "Goa",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727269209957_golden%201.webp",
    type: "hamilton",
  },
  {
    id: 55,
    name: "Baywatch Resort Goa",
    location: "Goa",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727249707905_bay%201.avif",
    type: "hamilton",
  },
  {
    id: 56,
    name: "Estrela Do Mar Beach Resort",
    location: "Goa",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727268658370_beach%201.jpg",
    type: "hamilton",
  },
  {
    id: 57,
    name: "La Serene Valley by DLS Hotels",
    location: "Manali",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727248121485_dlss1.jpg",
    type: "hamilton",
  },
  {
    id: 58,
    name: "Honeymoon inn- Manali",
    location: "Manali",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727247472864_honey%204.jpg",
    type: "hamilton",
  },
  {
    id: 59,
    name: "Sun Park Boutique & Spa",
    location: "Manali",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727246907156_sun%2011.jpeg",
    type: "hamilton",
  },
  {
    id: 60,
    name: "Country inn premier pacific Resort",
    location: "Mussoorie",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727245236350_m1.jpg",
    type: "hamilton",
  },
  {
    id: 61,
    name: "Sterling Mount Abu",
    location: "Mount Abu",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727244527777_abu%203.webp",
    type: "hamilton",
  },
  {
    id: 62,
    name: "Udaan Hotels Wood Berry Hotels & Spa",
    location: "Sikkim",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727243622706_sikkim%201.webp",
    type: "hamilton",
  },
  {
    id: 63,
    name: "The Fern Sattva Resort Dwarka",
    location: "Dwarka (Gujarat)",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727242558469_Dwarka.jpg",
    type: "hamilton",
  },
  {
    id: 64,
    name: "Sayaji Rajkot",
    location: "Rajkot",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727173154622_rajkot%201.webp",
    type: "hamilton",
  },
  {
    id: 65,
    name: "Ramada By Wyndham",
    location: "Kutch",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727172596752_kutch%201.webp",
    type: "hamilton",
  },
  {
    id: 66,
    name: "Rengenta place Bhopal By Royal Orchit Hotels",
    location: "Bhopal",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727171240881_bhopal%201.webp",
    type: "hamilton",
  },
  {
    id: 67,
    name: "Sarover Portico Somnath",
    location: "Somnath",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727162188180_sa3.jpg",
    type: "hamilton",
  },
  {
    id: 68,
    name: "Lords Inn Somnath",
    location: "Somnath",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727160939050_S1.jpg",
    type: "hamilton",
  },
  {
    id: 69,
    name: "Kohinoor samadra beach resort",
    location: "Ratnagiri",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727160537449_r1.webp",
    type: "hamilton",
  },
  {
    id: 70,
    name: "CHERILYN MOUTA RESORT",
    location: "Ratnagiri",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727159576294_1.webp",
    type: "hamilton",
  },
  {
    id: 71,
    name: "Clarks Inn Express",
    location: "Dehradun",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726997185002_Clarks%20Inn%20Express%20Dehradun1.webp",
    type: "hamilton",
  },
  {
    id: 72,
    name: "Ramada by Wyndham Dehradun",
    location: "Dehradun",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726986283447_Ramada%20by%20Wyndham%20Dehradun1.webp",
    type: "hamilton",
  },
  {
    id: 73,
    name: "Dalhousie Valley Resort By DLS Hotels",
    location: "Dalhousie",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726986012904_Dalhousie%20Valley%20Resort%20By%20DLS%20Hotels1.webp",
    type: "hamilton",
  },
  {
    id: 74,
    name: "Ark Holiday Inn By DLS Hotels",
    location: "Dalhousie",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726913860006_Ark%20Holiday%20Inn%20By%20DLS%20Hotels1.webp",
    type: "hamilton",
  },
  {
    id: 75,
    name: "Claret Inn By DLS Hotels",
    location: "Dalhousie",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726913700892_Claret%20Inn%20By%20DLS%20Hotels1.webp",
    type: "hamilton",
  },
  {
    id: 76,
    name: "Regenta Resort Exotica",
    location: "Dharamshala",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726912761186_Regenta%20Resort%20Exotica%20Dharamshala%201.webp",
    type: "hamilton",
  },
  {
    id: 77,
    name: "Spring Valley Resort By DLS Hotels",
    location: "Dharamshala",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726911076049_Spring%20Valley%20Resort%20By%20DLS%20Hotels1.webp",
    type: "hamilton",
  },
  {
    id: 78,
    name: "Udaan Nirvana Resort",
    location: "Darjeeling",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726910383878_Udaan%20Nirvana%20Resort1.webp",
    type: "hamilton",
  },
  {
    id: 79,
    name: "Udaan Himalayan Suites",
    location: "Darjeeling",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726909715515_Udaan%20Himalayan%20Suites1.webp",
    type: "hamilton",
  },
  {
    id: 80,
    name: "Udaan Dekeling Resort",
    location: "Darjeeling",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726895158011_Udaan%20Dekeling%20Resort1.webp",
    type: "hamilton",
  },
  {
    id: 81,
    name: "Treehouse Chail Villas",
    location: "Chail",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726894552648_Treehouse%20Chail%20Villas1.webp",
    type: "hamilton",
  },
  {
    id: 82,
    name: "Maple Resort",
    location: "Chail",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726894350638_Maple%20Resort%20Chail1.webp",
    type: "hamilton",
  },
  {
    id: 83,
    name: "Treehouse Hotel Club & Spa",
    location: "Bhiwadi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726893220546_Treehouse%20Hotel%20Club%20%26%20Spa1.webp",
    type: "hamilton",
  },
  {
    id: 84,
    name: "Goldfinch Hotel",
    location: "Bangalore",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726844121232_Goldfinch%20Hotel%20Bangalore1.webp",
    type: "hamilton",
  },
  {
    id: 85,
    name: "Hotel Royal Orchid",
    location: "Bangalore",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726843687650_Hotel%20Royal%20Orchid%20Bangalore1.webp",
    type: "hamilton",
  },
  {
    id: 86,
    name: "The Fern Residency",
    location: "Amritsar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726842838556_The%20Fern%20Residency1.webp",
    type: "hamilton",
  },
  {
    id: 87,
    name: "Fortune Select SG Highway",
    location: "Ahmedabad",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726842125871_Fortune%20Select%20SG%20Highway1.webp",
    type: "hamilton",
  },
  {
    id: 88,
    name: "Cambay Grand Hotel",
    location: "Ahmedabad",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726841208175_Cambay%20Grand%20Hotel1.webp",
    type: "hamilton",
  },
  {
    id: 89,
    name: "Narayani Heights Hotel and Resort",
    location: "Ahmedabad",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726839700443_Narayani%20Heights%20Hotel%20and%20Resort5.webp",
    type: "hamilton",
  },
  {
    id: 90,
    name: "Hotel Clarks Shiraz Agra",
    location: "Agra",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726838430815_Hotel%20Clarks%20Shiraz%20Agra1.webp",
    type: "hamilton",
  },
  {
    id: 91,
    name: "Howard Plaza The Fern",
    location: "Agra",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1726836542758_HOWARD%20PLAZA%20THE%20FERN%201.webp",
    type: "hamilton",
  },

  {
    id: 92,
    name: "Royal Orchid Central Kireeti",
    location: "Hampi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1735477005185_h3.webp",
    type: "hashtag",
  },
  {
    id: 93,
    name: "Hotel Le Ruchi The Prince",
    location: "Mysore",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1735476280725_m1.jpg",
    type: "hashtag",
  },
  {
    id: 94,
    name: "Regenta Central Herald Mysore By Royal Orchid Hotels",
    location: "Mysore",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1735473734299_r1.jpg",
    type: "hashtag",
  },
  {
    id: 95,
    name: "La Vela Saigon Hotel",
    location: "Ho Chi Minh City",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1729406999848_l2.jpg",
    type: "hashtag",
  },
  {
    id: 96,
    name: "Equatorial Ho Chi Minh City",
    location: "Ho Chi Minh City",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1729405204894_e2.jpg",
    type: "hashtag",
  },
  {
    id: 97,
    name: "Novotel Danang Premier Han River",
    location: "Da Nang",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1729404752686_n1.jpg",
    type: "hashtag",
  },
  {
    id: 98,
    name: "InterContinental Hanoi Westlake, an IHG Hotel",
    location: "Hanoi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1729403547638_1.jpg",
    type: "hashtag",
  },
  {
    id: 99,
    name: "Purple Palms Resort & Spa",
    location: "Coorg",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728986814723_p1.webp",
    type: "hashtag",
  },
  {
    id: 100,
    name: "Ayara Coorg Resort & Spa",
    location: "Coorg",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728986376412_a1.webp",
    type: "hashtag",
  },
  {
    id: 101,
    name: "Comrade Inn",
    location: "Srinagar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728984062254_i6.webp",
    type: "hashtag",
  },
  {
    id: 102,
    name: "Sarovar Portico Srinagar",
    location: "Srinagar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728981331424_s1.webp",
    type: "hashtag",
  },
  {
    id: 103,
    name: "Hotel Grand Boulevard",
    location: "Srinagar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728980780642_b1.webp",
    type: "hashtag",
  },
  {
    id: 104,
    name: "Ginger Srinagar Barzulla",
    location: "Srinagar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728980328184_g1.webp",
    type: "hashtag",
  },
  {
    id: 105,
    name: "Hotel Mount View",
    location: "pahalgam",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728979607485_v1.webp",
    type: "hashtag",
  },
  {
    id: 106,
    name: "Pahalgam Forest Resort",
    location: "Pahalgam",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728978957904_p1.jpg",
    type: "hashtag",
  },
  {
    id: 107,
    name: "Hotel Hilltop",
    location: "Gulmarg",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728978485106_h1.jpg",
    type: "hashtag",
  },
  {
    id: 108,
    name: "Novotel Chennai Sipcot",
    location: "Chennai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728977627732_m1.webp",
    type: "hashtag",
  },
  {
    id: 109,
    name: "Holiday Inn Express Chennai Omr Thoraipakkam",
    location: "Chennai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728977141853_t1.jpg",
    type: "hashtag",
  },
  {
    id: 110,
    name: "Shilton Dee Cee",
    location: "Chennai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728976588503_c1.jpg",
    type: "hashtag",
  },
  {
    id: 111,
    name: "Kostamar Beach Resort and Spa",
    location: "Diu",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728976086379_k1.webp",
    type: "hashtag",
  },
  {
    id: 112,
    name: "Flamingo Club and Resort",
    location: "Diu",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728975667827_7.jpg",
    type: "hashtag",
  },
  {
    id: 113,
    name: "Nest Beacon Resort",
    location: "Daman",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728975007564_1.jpg",
    type: "hashtag",
  },
  {
    id: 114,
    name: "Vits Daman Devka Beach",
    location: "Daman",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728974591891_d1.jpg",
    type: "hashtag",
  },
  {
    id: 115,
    name: "Ramada by Wyndham Jalandhar City Centre",
    location: "Jalandhar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728973423388_b1.jpg",
    type: "hashtag",
  },
  {
    id: 116,
    name: "Golden Tulip Jalandhar",
    location: "Jalandhar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728972974311_g1.jpg",
    type: "hashtag",
  },
  {
    id: 117,
    name: "Sarovar Portico Jalandhar",
    location: "Jalandhar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728972362730_s1.jpg",
    type: "hashtag",
  },
  {
    id: 118,
    name: "Lemon Tree Hotel",
    location: "Jhansi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728970971707_j1.jpg",
    type: "hashtag",
  },
  {
    id: 119,
    name: "Regenta Place Jhansi",
    location: "Jhansi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728970484166_r1.jpg",
    type: "hashtag",
  },
  {
    id: 120,
    name: "Nataraj Sarovar Portico-Jhansi",
    location: "Jhansi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728969554101_n1.jpg",
    type: "hashtag",
  },
  {
    id: 121,
    name: "Arista by Ambition",
    location: "Guwahati",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728824084012_a1.jpg",
    type: "hashtag",
  },
  {
    id: 122,
    name: "Ratnamouli palace",
    location: "Guwahati",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728822604132_1.webp",
    type: "hashtag",
  },
  {
    id: 123,
    name: "Sachika Hotel",
    location: "Guwahati",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728820792201_g1.jpg",
    type: "hashtag",
  },
  {
    id: 124,
    name: "Comfort Inn Statue Of Unity",
    location: "Statue Of Unity",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728819334519_u1.webp",
    type: "hashtag",
  },
  {
    id: 125,
    name: "The Fern Sardar Sarovar Resort , Ekta Nagar",
    location: "Statue Of Unity",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728818627512_t1.webp",
    type: "hashtag",
  },
  {
    id: 126,
    name: "Ramada Encore By Wyndham Statue Of Unity",
    location: "Statue Of Unity",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728817755773_s1.webp",
    type: "hashtag",
  },
  {
    id: 127,
    name: "The Mountain Courtyard",
    location: "Thekkady",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728816798399_m1.webp",
    type: "hashtag",
  },
  {
    id: 128,
    name: "Holiday Inn Express Gurugram Sector 50",
    location: "Delhi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728816204330_h1.webp",
    type: "hashtag",
  },
  {
    id: 129,
    name: "Radisson Blu Hotel Dwarka",
    location: "Delhi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728815703185_n1.jpg",
    type: "hashtag",
  },
  {
    id: 130,
    name: "Crowne Plaza Pune City Centre",
    location: "Pune ",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728815212735_c1.jpg",
    type: "hashtag",
  },
  {
    id: 131,
    name: "Novotel Pune Nagar Road",
    location: "Pune ",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728814505162_p1.jpg",
    type: "hashtag",
  },
  {
    id: 132,
    name: "Daiwik Hotels Rameswaram",
    location: "Rameswaram",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728813053353_d1.jpg",
    type: "hashtag",
  },
  {
    id: 133,
    name: "The Residency Towers",
    location: "Rameswaram",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728812378775_r1.jpg",
    type: "hashtag",
  },
  {
    id: 134,
    name: "Sremethila Hotels Rameswaram",
    location: "Rameswaram",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728807950274_s1.jpg",
    type: "hashtag",
  },
  {
    id: 135,
    name: "Regenta place Greenleaf Mahabaleshwar",
    location: "Mahabaleshwar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728806654329_m1.jpg",
    type: "hashtag",
  },
  {
    id: 136,
    name: "The Grand Legacy Resort & Spa",
    location: "Mahabaleshwar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728805368107_1.webp",
    type: "hashtag",
  },
  {
    id: 137,
    name: "Evershine Resort & Spa",
    location: "Mahabaleshwar",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728804642374_e1.jpg",
    type: "hashtag",
  },
  {
    id: 138,
    name: "Aurika by Lemon Tree Hotels, Mumbai International",
    location: "Mumbai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728803982296_l1.jpg",
    type: "hashtag",
  },
  {
    id: 139,
    name: "Goldfinch Hotel",
    location: "Mumbai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728803473582_g1.jpg",
    type: "hashtag",
  },
  {
    id: 140,
    name: "Ramee Guestline Hotel Juhu",
    location: "Mumbai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728802870111_m1.jpg",
    type: "hashtag",
  },
  {
    id: 141,
    name: "Temple Himalaya Hotel & Spa",
    location: "Pokhara",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728802016538_h1.jpg",
    type: "hashtag",
  },
  {
    id: 142,
    name: "Hotel Sarowar-Pokhara",
    location: "Pokhara",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728801577808_p1.jpg",
    type: "hashtag",
  },
  {
    id: 143,
    name: "The Everest Hotel",
    location: "Kathmandu",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728801184756_t1.jpg",
    type: "hashtag",
  },
  {
    id: 144,
    name: "Lemon Tree Premier Budhanilkantha, Kathmandu Nepal",
    location: "Kathmandu",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728800655231_l1.jpg",
    type: "hashtag",
  },
  {
    id: 145,
    name: "Club Hotel Dolphin",
    location: "Negombo",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728800083154_d1.jpg",
    type: "hashtag",
  },
  {
    id: 146,
    name: "Amaya Hills",
    location: "Kandy",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728799398456_a1.jpg",
    type: "hashtag",
  },
  {
    id: 147,
    name: "Marino Beach Colombo",
    location: "Colombo",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728798597110_c1.jpg",
    type: "hashtag",
  },
  {
    id: 148,
    name: "Leonardo Hotel Salzburg",
    location: "Salzburg",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728796626090_s1.jpg",
    type: "hashtag",
  },
  {
    id: 149,
    name: "Austria Trend Hotel Congress Innsbruck",
    location: "Innsbruck",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728732626718_a1.jpg",
    type: "hashtag",
  },
  {
    id: 150,
    name: "Da Zhong Pudong Airport Hotel Shanghai",
    location: "Shanghai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728731949601_z1.webp",
    type: "hashtag",
  },
  {
    id: 151,
    name: "SHANGHAI-DECO Hotel Pudong",
    location: "Shanghai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728727325163_p1.jpg",
    type: "hashtag",
  },
  {
    id: 152,
    name: "Novotel Guangzhou Baiyun",
    location: "Guangzhou",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728726656771_n1.webp",
    type: "hashtag",
  },
  {
    id: 153,
    name: "Swisstouches Guangzhou Hotel Residences",
    location: "Guangzhou",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728725990022_s1.jpg",
    type: "hashtag",
  },
  {
    id: 154,
    name: "Ramada by Wyndham Beijing",
    location: "Beijing",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728724964694_r2.jpg",
    type: "hashtag",
  },
  {
    id: 155,
    name: "Sunworld Hotel",
    location: "Beijing",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728719424606_w1.webp",
    type: "hashtag",
  },
  {
    id: 156,
    name: "View Brisbane",
    location: "Brisbane",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728718364558_v1.webp",
    type: "hashtag",
  },
  {
    id: 157,
    name: "Meriton Suites Liverpool",
    location: "Sydney",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728717717461_m1.webp",
    type: "hashtag",
  },
  {
    id: 158,
    name: "Citadines  Connect Sydney",
    location: "Sydney",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728716841381_s1.jpg",
    type: "hashtag",
  },
  {
    id: 159,
    name: "Oaks Melbourne on Collins Suites",
    location: "Melbourne",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728716254558_o1.webp",
    type: "hashtag",
  },
  {
    id: 160,
    name: "Quest Melbourne",
    location: "Melbourne",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728715393968_q1.jpg",
    type: "hashtag",
  },
  {
    id: 161,
    name: "Rydges Gold Coast",
    location: "Gold Coast",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728714885912_h1.jpg",
    type: "hashtag",
  },
  {
    id: 162,
    name: "Hope Harbour Hotel",
    location: "Gold Coast",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728645176266_g1.jpg",
    type: "hashtag",
  },
  {
    id: 163,
    name: "Palm Royale Cairns Resort",
    location: "Cairns",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728640535954_a1.jpg",
    type: "hashtag",
  },
  {
    id: 164,
    name: "Acacia Court Hotel",
    location: "Cairns",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728640009429_1.jpg",
    type: "hashtag",
  },
  {
    id: 165,
    name: "Aquila Atlantis Hotel",
    location: "Crete Island",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728454681243_h5.jpg",
    type: "hashtag",
  },
  {
    id: 166,
    name: "Petousis Hotel & Suites",
    location: "Crete Island",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728454088793_p1.jpg",
    type: "hashtag",
  },
  {
    id: 167,
    name: "Ambience Suites",
    location: "Santorini",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728452790009_a1.jpg",
    type: "hashtag",
  },
  {
    id: 168,
    name: "Aelia Luxury Suites Santorini",
    location: "Santorini",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728452290807_s1.jpg",
    type: "hashtag",
  },
  {
    id: 169,
    name: "Mykonos Moussa Suites",
    location: "Mykonos ",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728451808066_g4.jpg",
    type: "hashtag",
  },
  {
    id: 170,
    name: "Novotel Athenes",
    location: "Athens",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728450792610_n1.jpg",
    type: "hashtag",
  },
  {
    id: 171,
    name: "Electra Hotel Athens",
    location: "Athens",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728450162706_e1.jpg",
    type: "hashtag",
  },
  {
    id: 172,
    name: "Grand Bay View Hotel & Resort",
    location: "Hong Kong",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728391309121_g1.webp",
    type: "hashtag",
  },
  {
    id: 173,
    name: "Ramada Hong Kong Harbour View",
    location: "Hong Kong",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728390995380_11.jpg",
    type: "hashtag",
  },
  {
    id: 174,
    name: "Regala Skycity Hotel",
    location: "Hong Kong",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728390651673_h1.webp",
    type: "hashtag",
  },
  {
    id: 175,
    name: "Danubius Hotel Arena",
    location: "Budapest",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728389784315_d1.webp",
    type: "hashtag",
  },
  {
    id: 176,
    name: "Continental Hotel Budapest",
    location: "Budapest",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728388905882_1.jpg",
    type: "hashtag",
  },
  {
    id: 177,
    name: "Leonardo Hotel Budapest",
    location: "Budapest",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728388306352_b1.webp",
    type: "hashtag",
  },
  {
    id: 178,
    name: "Hotel Royal Macau",
    location: "Macau",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728387909549_r1.jpg",
    type: "hashtag",
  },
  {
    id: 179,
    name: "Legend palace Hotel",
    location: "Macau",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728387430470_l1.webp",
    type: "hashtag",
  },
  {
    id: 180,
    name: "Grand Coloane Resort",
    location: "Macau",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728385679383_o1.jpg",
    type: "hashtag",
  },
  {
    id: 181,
    name: "Istanbul Midpoint Hotel",
    location: "Turkey",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728382212559_m1.webp",
    type: "hashtag",
  },
  {
    id: 182,
    name: "Akgun Istanbul Hotel",
    location: "Turkey",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728381770405_i1.jpg",
    type: "hashtag",
  },
  {
    id: 183,
    name: "Ramada By Wyndham Istanbul Pera",
    location: "Turkey",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728381272955_t1.jpg",
    type: "hashtag",
  },
  {
    id: 184,
    name: "Silver sand Sea Princess Beach Resort",
    location: "Port Blair",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728380652432_s1.webp",
    type: "hashtag",
  },
  {
    id: 185,
    name: "Silver Sand Beach Resort",
    location: "Neil Island",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728380003576_a1.jpg",
    type: "hashtag",
  },
  {
    id: 186,
    name: "Symphony Summer Sands Neil Island",
    location: "Neil Island",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728379270869_n1.webp",
    type: "hashtag",
  },
  {
    id: 187,
    name: "Symphony Palms Beach Resort And Spa",
    location: "Havelock",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728376322181_d1.jpg",
    type: "hashtag",
  },
  {
    id: 188,
    name: "Havelock Island Beach Resort",
    location: "Havelock",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728375371145_1.webp",
    type: "hashtag",
  },
  {
    id: 189,
    name: "Silver Sand Beach Resort, Havelock",
    location: "Havelock",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728374945317_a1.webp",
    type: "hashtag",
  },
  {
    id: 190,
    name: "Hotel Plaza Osaka",
    location: "Osaka",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728374274140_p1.webp",
    type: "hashtag",
  },
  {
    id: 191,
    name: "Osaka Excel Hotel Tokyu",
    location: "Osaka",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728373789075_o1.jpg",
    type: "hashtag",
  },
  {
    id: 192,
    name: "Rihga Royal Hotel Osaka",
    location: "Osaka",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728373216644_r1.jpg",
    type: "hashtag",
  },
  {
    id: 193,
    name: "Miyako Hotel Kyoto Hachijo",
    location: "Kyoto",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728372682200_m2.webp",
    type: "hashtag",
  },
  {
    id: 194,
    name: "Hotel Gracery Kyoto Sanjo North",
    location: "Kyoto",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728372270958_k1.jpg",
    type: "hashtag",
  },
  {
    id: 195,
    name: "Hotel Villa Fontaine Shiodome",
    location: "Tokyo",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728371839616_f1.webp",
    type: "hashtag",
  },
  {
    id: 196,
    name: "Hotel East 21 Tokyo",
    location: "Tokyo",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728306778801_o1.jpg",
    type: "hashtag",
  },
  {
    id: 197,
    name: "Melia Sevilla",
    location: "Seville",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728302744265_m1.jpg",
    type: "hashtag",
  },
  {
    id: 198,
    name: "Senator Granada Spa Hotel",
    location: "Granada",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728301906759_s1.jpg",
    type: "hashtag",
  },
  {
    id: 199,
    name: "Catalonia Granada",
    location: "Granada",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728301453872_c1.webp",
    type: "hashtag",
  },
  {
    id: 200,
    name: "Hotel Catalonia Granada",
    location: "Granada",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728300224739_t1.jpg",
    type: "hashtag",
  },
  {
    id: 201,
    name: "Hotel Valencia Center",
    location: "Valencia",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728298797805_h1.jpg",
    type: "hashtag",
  },
  {
    id: 202,
    name: "Parador de El Saler",
    location: "Valencia",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728297831424_e1.jpg",
    type: "hashtag",
  },
  {
    id: 203,
    name: "Primus Valencia",
    location: "Valencia",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728297036308_v1.jpg",
    type: "hashtag",
  },
  {
    id: 204,
    name: "Hotel Puerta America Madrid",
    location: "Madrid",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728296046748_p1.jpg",
    type: "hashtag",
  },
  {
    id: 205,
    name: "Ramada by Wyndham Madrid Getafe",
    location: "Madrid",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728295376956_r1.jpg",
    type: "hashtag",
  },
  {
    id: 206,
    name: "Novotel Barcelona Cornella",
    location: "Barcelona",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728294792070_n1.webp",
    type: "hashtag",
  },
  {
    id: 207,
    name: "Leonardo Royal Hotel Barcelona Fira",
    location: "Barcelona",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728294174622_b3.jpg",
    type: "hashtag",
  },
  {
    id: 208,
    name: "Alexandre Hotel Fire Congress",
    location: "Barcelona",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728289970517_b1.jpg",
    type: "hashtag",
  },
  {
    id: 209,
    name: "Daniya Denia Spa & Business",
    location: "Spain",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728288765152_s1.jpg",
    type: "hashtag",
  },
  {
    id: 210,
    name: "Pulse Grande Hotel",
    location: "Putrajaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728287877049_1.jpg",
    type: "hashtag",
  },
  {
    id: 211,
    name: "Double Tree by Hilton Putrajaya Lakeside",
    location: "Putrajaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728287376289_d1.jpg",
    type: "hashtag",
  },
  {
    id: 212,
    name: "Hatten Hotel Melaka",
    location: "Malacca",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728286842788_h1.jpg",
    type: "hashtag",
  },
  {
    id: 213,
    name: "Holiday Inn Melaka",
    location: "Malacca",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728286254298_m1.jpg",
    type: "hashtag",
  },
  {
    id: 214,
    name: "Royale Chulan Kuala Lumpur",
    location: "Kuala Lumpur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728284631723_r1.jpg",
    type: "hashtag",
  },
  {
    id: 215,
    name: "Double Tree by Hilton Kuala Lumpur",
    location: "Kuala Lumpur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728284085197_k1.jpg",
    type: "hashtag",
  },
  {
    id: 216,
    name: "Berjaya Times Square Hotel",
    location: "Kuala Lumpur",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728283417287_l4.jpg",
    type: "hashtag",
  },
  {
    id: 217,
    name: "Wyndham Casablanca Jakarta",
    location: "Jakarta",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728281469839_c3.jpg",
    type: "hashtag",
  },
  {
    id: 218,
    name: "Hotel Borobudur Jakarta",
    location: "Jakarta",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1728280876261_j6.jpg",
    type: "hashtag",
  },
  {
    id: 219,
    name: "Zara Beach Resort Koh Samui",
    location: "Koh Samui",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727605812156_z2.jpg",
    type: "hashtag",
  },
  {
    id: 220,
    name: "Deva Beach Resort",
    location: "Koh Samui",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727605418490_d1.jpg",
    type: "hashtag",
  },
  {
    id: 221,
    name: "Villa Cha-Cha Krabi Beachfront Resort",
    location: "Krabi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727604337158_v1.webp",
    type: "hashtag",
  },
  {
    id: 222,
    name: "Krabi Resort",
    location: "Krabi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727602728891_kk.webp",
    type: "hashtag",
  },
  {
    id: 223,
    name: "Krabi La Playa Resort",
    location: "Krabi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727602140928_k1.jpg",
    type: "hashtag",
  },
  {
    id: 224,
    name: "A-ONE Pattaya Beach Resort",
    location: "Pattaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727598826684_a1.jpg",
    type: "hashtag",
  },
  {
    id: 225,
    name: "Centara Pattaya Hotel",
    location: "Pattaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727598374330_c1.webp",
    type: "hashtag",
  },
  {
    id: 226,
    name: "Arbour Hotel and Residence pattaya",
    location: "Pattaya",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727597924743_p1.webp",
    type: "hashtag",
  },
  {
    id: 227,
    name: "Divalux Resort & Spa Bangkok Suvarnabhumi Airport",
    location: "Bangkok",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727596060982_a2.jpg",
    type: "hashtag",
  },
  {
    id: 228,
    name: "Radissons Suites Bangkok Sukhumvit",
    location: "Bangkok",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727595636297_t1.jpg",
    type: "hashtag",
  },
  {
    id: 229,
    name: "Ramada Plaza by Wyndham Bangkok Sukhumvit",
    location: "Bangkok",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727594936607_b1.webp",
    type: "hashtag",
  },
  {
    id: 230,
    name: "Sunset Beach Resort",
    location: "Phuket",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727516268310_s1.jpg",
    type: "hashtag",
  },
  {
    id: 231,
    name: "Ramada by Wyndham Phuket",
    location: "Phuket",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727515769791_pr1.webp",
    type: "hashtag",
  },
  {
    id: 232,
    name: "Novotel Phuket Resort",
    location: "Phuket",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727515021476_p1.jpg",
    type: "hashtag",
  },
  {
    id: 233,
    name: "Radisson Hotel & Conference Center Airport",
    location: "Calgary (AB)",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727509747913_ra1.jpg",
    type: "hashtag",
  },
  {
    id: 234,
    name: "Double Tree by Hilton Calgary North",
    location: "Calgary (AB)",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727504785354_d1.jpg",
    type: "hashtag",
  },
  {
    id: 235,
    name: "Ramada Plaza Wyndham Calgary Downtown",
    location: "Calgary (AB)",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727504248982_r1.jpg",
    type: "hashtag",
  },
  {
    id: 236,
    name: "Corniche Hotel Abu Dhabi",
    location: "Abu Dhabi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727443225340_c4.webp",
    type: "hashtag",
  },
  {
    id: 237,
    name: "Jannah Burj AI Sarab Hotel",
    location: "Abu Dhabi",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727442813799_a1.jpg",
    type: "hashtag",
  },
  {
    id: 238,
    name: "Pan Pacific Toronto",
    location: "Toronto (ON)",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727429072309_t1.webp",
    type: "hashtag",
  },
  {
    id: 239,
    name: "Mercure Zurich City",
    location: "Switzerland",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727423233777_sw1.jpg",
    type: "hashtag",
  },
  {
    id: 240,
    name: "Radisson Hotel Zurich Airport",
    location: "Switzerland",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727422650918_s1.webp",
    type: "hashtag",
  },
  {
    id: 241,
    name: "Novotel Milano Malpensa Airport",
    location: "Milan ",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727422013522_m4.jpg",
    type: "hashtag",
  },
  {
    id: 242,
    name: "Hotel Atlantic Palace",
    location: "Florence",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727421083319_h1.webp",
    type: "hashtag",
  },
  {
    id: 243,
    name: "Novotel Firenze Nord Aeroporto",
    location: "Florence",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727420464026_f2.jpg",
    type: "hashtag",
  },
  {
    id: 244,
    name: "Novotel Roma Est",
    location: "Rome",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727347522380_est%201.jpg",
    type: "hashtag",
  },
  {
    id: 245,
    name: "Hotel Roma Aurelia Antica",
    location: "Rome",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727346944001_rome1.jpg",
    type: "hashtag",
  },
  {
    id: 246,
    name: "Mercure Roma West Hotel",
    location: "Rome",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727346131099_roma%201.webp",
    type: "hashtag",
  },
  {
    id: 247,
    name: "Novotel Venezia Mestre Castellana Hotel",
    location: "Venice",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727345128244_novo%202.jpg",
    type: "hashtag",
  },
  {
    id: 248,
    name: "Four Points by Sheraton Venice Mestre",
    location: "Venice",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727344322840_venice%201.webp",
    type: "hashtag",
  },
  {
    id: 249,
    name: "HOMM Saranam Baturiti Bali",
    location: "Bali",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727339440713_22.jpg",
    type: "hashtag",
  },
  {
    id: 250,
    name: "Wyndham Tamansari Jivva Resort Bali",
    location: "Bali",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727338547409_bali%201.jpg",
    type: "hashtag",
  },
  {
    id: 251,
    name: "Ramada Encore by Wyndham Seminyak Bali",
    location: "Bali",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727337373756_bali%201.webp",
    type: "hashtag",
  },
  {
    id: 252,
    name: "Millennium Central Downtown",
    location: "Dubai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727336346777_dubai%201.jpg",
    type: "hashtag",
  },
  {
    id: 253,
    name: "Four Points by Sheraton Sharjah",
    location: "Dubai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727335766164_dubai%2011.jpg",
    type: "hashtag",
  },
  {
    id: 254,
    name: "Crown Plaza Dubai-Deira",
    location: "Dubai",
    image:
      "https://hamiltongarden-assets.s3.ap-south-1.amazonaws.com/destinations/1727335154631_dubai%201.jpg",
    type: "hashtag",
  },
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const locations = Array.from(
    new Set(allDestinations.map((dest) => dest.location))
  ).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  // Filter destinations based on all criteria
  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || dest.type === selectedType;
    const matchesLocation =
      selectedLocation === "all" || dest.location === selectedLocation;

    return matchesSearch && matchesType && matchesLocation;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {" "}
      <Breadcrumb
        title="Our Destinations"
        path="destination"
        backgroundImage="/img/bg/destination.jpg"
      />
      <div className="min-vh-100 bg-light py-5">
        <Container>
          {/* <h1 className="text-center display-4 fw-bold mb-5">
              Our Destinations
            </h1> */}

          <Row className="mb-4 g-3">
            {/* Search Filter */}
            <Col md={4}>
              <div className="position-relative">
                <BiSearch
                  className="position-absolute top-50 translate-middle-y"
                  style={{ left: "1rem" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="ps-5"
                  style={{ height: "auto", padding: "8px 12px 8px 48px" }}
                />
              </div>
            </Col>

            {/* Type Filter */}
            <Col md={4}>
              <Form.Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{ height: "auto", padding: "8px 12px" }}
              >
                <option value="all">All Types</option>
                <option value="hamilton">
                  HevenQuest & Associated Partners
                </option>
                <option value="hashtag">Hashtag</option>
              </Form.Select>
            </Col>

            {/* Location Filter */}
            <Col md={4}>
              <Form.Select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                style={{ height: "auto", padding: "8px 12px" }}
              >
                <option value="all">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          {/* Destinations Grid */}
          <Row className="g-4 mb-4">
            {paginatedDestinations.map((destination) => (
              <Col key={destination.id} md={6} lg={4}>
                <Card className="h-100 shadow-sm hover-shadow transition">
                  <div style={{ position: "relative", paddingTop: "75%" }}>
                    <Card.Img
                      variant="top"
                      src={destination.image}
                      alt={destination.name}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                      }}
                    >
                      <h5 className="mb-2" style={{ color: "white" }}>
                        {destination.name}
                      </h5>
                      <div className="d-flex align-items-center">
                        <FaMapMarkerAlt className="me-1" />
                        <span>{destination.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center align-items-center gap-2">
              <Button
                variant="outline-dark"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <MdChevronLeft />
              </Button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline-dark"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
              >
                <MdChevronRight />
              </Button>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
