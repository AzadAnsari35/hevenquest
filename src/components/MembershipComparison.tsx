import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import React Icons

const MembershipComparison: React.FC = () => {
  return (
    <section id="compare" className="py-5">
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold">Membership Benefits Comparison</h2>
            <p className="lead">
              Compare our membership tiers to find the perfect fit for your
              travel needs.
            </p>
          </div>
        </div>

        {/* Desktop comparison table (hidden on mobile) */}
        <div className="table-responsive d-none d-md-block">
          <table className="table comparison-table">
            <thead>
              <tr>
                <th scope="col" style={{ width: "25%" }}>
                  Benefits
                </th>
                <th
                  scope="col"
                  className="text-center"
                  style={{ width: "25%" }}
                >
                  Standard
                </th>
                <th
                  scope="col"
                  className="text-center bg-premium"
                  style={{ width: "25%" }}
                >
                  Premium
                </th>
                <th
                  scope="col"
                  className="text-center"
                  style={{ width: "25%" }}
                >
                  Elite
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Room Benefits */}
              <tr>
                <td>When the resorts are not packed</td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
              </tr>
              <tr>
                <td>If you love the Monsoon season</td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
              </tr>
              <tr>
                <td>During the work week</td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
              </tr>
              <tr>
                <td>During Non-Peak Season</td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
              </tr>

              {/* Dining & Recreation */}
              <tr>
                <td>During School / College Vacations</td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
              </tr>
              <tr>
                <td>On National Holidays</td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
              </tr>
              <tr>
                <td>During Festivals</td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-success">
                    <FaCheck />
                  </span>
                </td>
              </tr>

              {/* Transportation & Services */}
              <tr>
                <td>Any time of the year</td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
              </tr>
              <tr>
                <td>On Special Days i.e. New Year's Eve</td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center bg-premium-light">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
                <td className="text-center">
                  <span className="text-muted">
                    <FaTimes />
                  </span>
                </td>
              </tr>

              {/* Package Price */}
              <tr className="price-row">
                <td>Package Price</td>
                <td className="text-center">
                  <p>₹6.75 Lakhs</p>
                </td>
                <td className="text-center bg-premium-light">
                  <p>₹7.11 Lakhs</p>
                </td>
                <td className="text-center">
                  <p>₹10.02 Lakhs</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile comparison cards (visible only on mobile) */}

        <div className="d-md-none">
          <div className="card mb-4">
            <div className="card-header">
              <h4 className="mb-0">Standard</h4>
            </div>
            <div className="card-body p-0">
              <ul className="mobile-features-list">
                <li className="category">Room Benefits</li>
                <li>
                  Early Check-in{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
                <li>
                  Late Check-out{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
                <li>
                  Room Upgrades{" "}
                  <span>
                    <FaTimes className="text-muted" />
                  </span>
                </li>
                <li>
                  Welcome Amenity{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>

                <li className="category">Dining & Recreation</li>
                <li>
                  Restaurant Discount <span>10%</span>
                </li>
                <li>
                  Spa Credit{" "}
                  <span>
                    <FaTimes className="text-muted" />
                  </span>
                </li>
                <li>
                  Fitness Center Access{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>

                <li className="category">Transportation & Services</li>
                <li>
                  Airport Transfers{" "}
                  <span>
                    <FaTimes className="text-muted" />
                  </span>
                </li>
                <li>
                  Concierge Services <span>Standard</span>
                </li>
                <li>
                  Free Parking{" "}
                  <span>
                    <FaTimes className="text-muted" />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-4 premium-card">
            <div className="card-header">
              <h4 className="mb-0">Premium</h4>
            </div>
            <div className="card-body p-0">
              <ul className="mobile-features-list">
                <li className="category">Room Benefits</li>
                <li>
                  Early Check-in{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
                <li>
                  Late Check-out{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
                <li>
                  Room Upgrades{" "}
                  <span>
                    <FaCheck className="text-success" /> (when available)
                  </span>
                </li>
                <li>
                  Welcome Amenity{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>

                <li className="category">Dining & Recreation</li>
                <li>
                  Restaurant Discount <span>20%</span>
                </li>
                <li>
                  Spa Credit <span>$50 per stay</span>
                </li>
                <li>
                  Fitness Center Access{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>

                <li className="category">Transportation & Services</li>
                <li>
                  Airport Transfers{" "}
                  <span>
                    <FaTimes className="text-muted" />
                  </span>
                </li>
                <li>
                  Concierge Services <span>Priority</span>
                </li>
                <li>
                  Free Parking{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h4 className="mb-0">Elite</h4>
            </div>
            <div className="card-body p-0">
              <ul className="mobile-features-list">
                <li className="category">Room Benefits</li>
                <li>
                  Early Check-in{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
                <li>
                  Late Check-out{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
                <li>
                  Room Upgrades{" "}
                  <span>
                    <FaCheck className="text-success" /> (guaranteed)
                  </span>
                </li>
                <li>
                  Welcome Amenity{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>

                <li className="category">Dining & Recreation</li>
                <li>
                  Restaurant Discount <span>30%</span>
                </li>
                <li>
                  Spa Credit <span>$100 per stay</span>
                </li>
                <li>
                  Fitness Center Access{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>

                <li className="category">Transportation & Services</li>
                <li>
                  Airport Transfers{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
                <li>
                  Concierge Services <span>Dedicated</span>
                </li>
                <li>
                  Free Parking{" "}
                  <span>
                    <FaCheck className="text-success" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipComparison;
