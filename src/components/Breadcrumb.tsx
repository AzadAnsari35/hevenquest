import Link from "next/link";
import React from "react";

const Breadcrumb: React.FC<{
  title: string;
  path: string;
  backgroundImage: string;
}> = ({ title, path, backgroundImage }) => {
  return (
    <section
      className="vs-breadcrumb"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div
          className="row text-center"
          style={{ zIndex: 2, position: "relative" }}
        >
          <div className="col-12">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-title">{title}</h1>
            </div>
            <div className="breadcrumb-menu">
              <ul className="custom-ul">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{path}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
