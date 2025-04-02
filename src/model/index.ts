import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AppleIcon,
  DestinationGallery,
  Gallery,
  MenuItem,
  SocialLink,
  Testimonials,
  TopDestinations,
  UsefulLinks,
} from "@/interface";
import { AiOutlineYoutube } from "react-icons/ai";

// TopNav SocialLinks data
export const socialLinks: SocialLink[] = [
  // {
  //   id: 1,
  //   link: "https://x.com/",
  //   icon: FaXTwitter,
  // },
  {
    id: 2,
    link: "https://www.facebook.com/profile.php?id=61574066897383",
    icon: TiSocialFacebook,
  },
  {
    id: 3,
    link: "https://www.instagram.com/hevenquest/?hl=en",
    icon: FaInstagram,
  },
];

// TopNav Menu data
export const menuItems: MenuItem[] = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "destinations", name: "Destinations" },
  { id: 3, link: "about", name: "About" },
  { id: 4, link: "package", name: "Packages" },
  { id: 5, link: "faq", name: "Faq’s" },
  { id: 6, link: "contact", name: "Contact" },
];

// Destinations data
export const topDestinations: TopDestinations[] = [
  {
    id: 1,
    img: "/img/destination/destination-1-1.jpg",
    place: "Dubai",
  },
  {
    id: 2,
    img: "/img/destination/destination-1-2.jpg",
    place: "Bangkok",
  },
  {
    id: 3,
    img: "/img/destination/destination-1-3.jpg",
    place: "Udaipur",
  },
  {
    id: 4,
    img: "/img/destination/destination-1-4.jpg",
    place: "Japan",
  },
];

// Destinations gallery data
export const gallery: DestinationGallery[] =  [
    {
      id: 1,
      img: "/img/destination-galler/destination-gallery-1-1.jpg",
      title: "Destination Gallery-1",
    },
    {
      id: 1,
      img: "/img/destination-galler/destination-gallery-1-2.png",
      title: "Destination Gallery-1",
    },
    {
      id: 2,
      img: "/img/destination-galler/destination-gallery-1-3.jpg",
      title: "Destination Gallery-1",
    },
    {
      id: 3,
      img: "/img/destination-galler/destination-gallery-1-4.jpg",
      title: "Destination Gallery-1",
    },
    {
      id: 4,
      img: "/img/destination-galler/destination-gallery-1-5.png",
      title: "Destination Gallery-1",
    },
  ];

// Testimonials gallery data
export const testimonials: Testimonials[] = [
  {
    id: 1,
    description: ` The trip exceeded all my expectations! The attention to detail and seamless planning made this an unforgettable experience. Highly recommended!`,
    name: "Rita Sharma",
    rating: 5,
  },
  {
    id: 2,
    description: `  I had an amazing time! The team at Heaven Quest made every aspect of the trip so easy and enjoyable. Truly the best travel agency I’ve worked with.`,
    name: "Priya Patel",
    rating: 5,
  },
  {
    id: 3,
    description: `Every part of our journey was perfect, from the accommodations to the activities. I can't wait to plan my next adventure with Heaven Quest!`,
    name: "Karan Singh",
    rating: 5,
  },
  {
    id: 4,
    description: `The entire experience was flawless. The guides were incredibly knowledgeable, and the itinerary was perfectly crafted to match my interests.`,
    name: "Vikram Mehra",
    rating: 5,
  },
  {
    id: 5,
    description: `From start to finish, Heaven Quest ensured every detail was taken care of. I felt truly valued as a traveler, and every moment was memorable!`,
    name: "Ananya Gupta",
    rating: 5,
  },
  {
    id: 6,
    description: ` A big thank you to the team for curating such a wonderful travel experience! The service was exceptional, and the trip was beyond expectations!`,
    name: "Sidharth Kumar",
    rating: 5,
  },
];

// Footer SocialLinks data
export const footerSocialLinks: SocialLink[] = [
  {
    id: 1,
    link: "https://www.facebook.com/profile.php?id=61574066897383",
    icon: TiSocialFacebook,
  },
  // {
  //   id: 2,
  //   link: "https://x.com/",
  //   icon: FaXTwitter,
  // },
  {
    id: 3,
    link: "https://www.instagram.com/hevenquest/?hl=en",
    icon: FaInstagram,
  },
  // {
  //   id: 4,
  //   link: "https://www.youtube.com/",
  //   icon: AiOutlineYoutube,
  // },
];

export const usefulLinks:UsefulLinks = [
  [
    {
      id: 1,
      link: "about",
      name: "About Us",
    },
    {
      id: 2,
      link: "terms",
      name: "Terms of service",
    },
    {
      id: 3,
      link: "faq",
      name: "FAQ's",
    },
  ],
  [
    {
      id: 4,
      link: "destinations",
      name: "Explore",
    },
    {
      id: 5,
      link: "package",
      name: "Services",
    },
    {
      id: 6,
      link: "privacy",
      name: "Privacy Policy",
    },
  ],
];

export const appleIcon: AppleIcon[] = [
  { id: 1, dimension: "16x16"},
  { id: 2, dimension: "32x32"},
  { id: 3, dimension: "57x57"},
  { id: 4, dimension: "60x60"},
  { id: 5, dimension: "72x72"},
  { id: 6, dimension: "76x76"},
  { id: 7, dimension: "96x96"},
  { id: 8, dimension: "114x114"},
  { id: 9, dimension: "120x120"},
  { id: 10, dimension: "144x144"},
  { id: 11, dimension: "152x152"},
  { id: 12, dimension: "180x180"},
]