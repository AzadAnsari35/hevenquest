import React from "react";

// Type for the individual package card
interface PackageCardProps {
  title: string;
  price: string;
  period: string;
  charges: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isPremium?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  period,
  charges,
  features,
  buttonText,
  buttonLink,
  isPremium = false,
}) => {
  return (
    <div className={`col-lg-4 mb-4`}>
      <div
        className={`card h-100 package-card ${
          isPremium ? "premium-card shadow" : "shadow-sm"
        }`}
      >
        <div className="card-header bg-white py-4">
          <h3 className="mb-0">{title}</h3>
        </div>
        <div className="card-body">
          <div className="price-wrapper mb-4">
            <span className="price">{price}</span>
            <span className="period">{period}</span>
          </div>
          <p className="card-text mb-4">Variable Charges : {charges}</p>
          <ul className="feature-list mb-4">
            {features.map((feature, index) => (
              <li key={index} className="included">
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={buttonLink}
            className={`btn ${
              isPremium ? "btn-primary" : "btn-outline-secondary"
            } d-block`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  return (
    <section
      id="packages"
      className="py-5 bg-light"
      style={{
        backgroundImage: `url(/img/bg/404-faq.png)`,
      }}
    >
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold">Choose Your Travel Package</h2>
            <p className="lead">
              Select the plan that fits your travel style and enjoy exclusive
              benefits tailored to your needs.
            </p>
          </div>
        </div>
        <div className="row">
          <PackageCard
            title="Blue"
            price="₹4.75"
            period="Lakhs"
            charges="₹16,000"
            features={[
              "25 years Holiday Package",
              "2 Adults + 2 Kids below 12 years",
              "Apartment - Studio",
            ]}
            buttonText="Subscribe"
            buttonLink="contact.html"
          />
          <PackageCard
            title="Red"
            price="₹6.95"
            period="Lakhs"
            charges="₹18,000"
            features={[
              "25 years Holiday Package",
              "2 Adults + 2 Kids below 12 years",
              "Apartment - Studio",
            ]}
            buttonText="Subscribe"
            buttonLink="contact.html"
            isPremium={true}
          />
          <PackageCard
            title="Purple"
            price="₹9.55"
            period="Lakhs"
            charges="₹20,000"
            features={[
              "25 years Holiday Package",
              "2 Adults + 2 Kids below 12 years",
              "Apartment - Studio",
            ]}
            buttonText="Select Plan"
            buttonLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;
