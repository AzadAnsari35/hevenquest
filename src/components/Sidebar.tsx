import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { menuItems } from "@/model";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button (hamburger icon) */}
      <span className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars size={24} color={pathname === "/" ? "white" : "black"} />
      </span>

      {/* Sidebar (Side Drawer) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={24} color="white" />
        </button>
        <div className="sidebar-logo">
          <Link href="/">
            <Image width={100} height={50} src="/img/logo.svg" alt="Tripix" />
          </Link>
        </div>
        <ul className="sidebar-links">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.link} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
