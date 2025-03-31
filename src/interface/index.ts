import { MotionStyle } from "framer-motion";
import { IconType } from "react-icons";

export interface SocialLink {
  id: number;
  link: string;
  icon: IconType;
}

export interface MenuItem {
  id: number;
  link: string;
  name: string;
}

export interface TopDestinations {
  id: number;
  img: string;
  place: string;
}

export interface DestinationGallery {
  id?: number;
  img?: string;
  title?: string;
}

export interface Gallery {
  big: DestinationGallery;
  small: DestinationGallery[];
}

export interface Testimonials {
  id: number;
  description: string;
  name: string;
  rating: number;
}

export interface LinkItem {
  id: number;
  link: string;
  name: string;
}

export type UsefulLinks = LinkItem[][];

export interface AppleIcon{
  id: number;
  dimension: string;
}

export interface ScrollAnimateProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  bounce?: number;
  styles?: MotionStyle | undefined
}