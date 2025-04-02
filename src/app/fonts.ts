import { 
    Abril_Fatface,
    Rubik,
    Bricolage_Grotesque,
    Poppins 
  } from 'next/font/google';
  
  // Define your fonts with proper typing
  export const titleFont = Abril_Fatface({
    weight: '400',
    subsets: ['latin'],
    variable: '--title-font',
    display: 'swap',
  });
  
  export const bodyFont = Rubik({
    subsets: ['latin'],
    variable: '--body-font',
    display: 'swap',
  });
  
  export const bricolageFont = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--bricolage-font',
    display: 'swap',
  });
  
  export const poppinsFont = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--poppins-font',
    display: 'swap',
  });