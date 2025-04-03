import React from "react";
import { Accordion } from "react-bootstrap";
import { CounterSection } from "./CounterSection";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  show?: boolean;
}

const AccordionComponent: React.FC = () => {
  const leftAccordionItems: AccordionItem[] = [
    {
      id: "collapseOneV1",
      title: "Why Should I Choose a Package Plan?",
      content:
        "A package plan is ideal if you're seeking a hassle-free, cost-effective experience. It covers all your travel needs, including accommodations, activities, and additional services, often bundled with exclusive discounts. Whether you're traveling for business or leisure, a package ensures you enjoy your trip without worrying about the details, saving you time and effort while offering great value.",
      show: true,
    },
    {
      id: "collapseTwoV1",
      title: "How Does a Package Plan Benefit Me?",
      content:
        "Booking a package plan offers numerous advantages, including exclusive discounts, access to premium services, and a hassle-free experience. It simplifies your trip by combining essential elements like accommodations and activities, saving you both time and money while offering added perks like special upgrades.",
    },
    {
      id: "collapseThreeV1",
      title: "Can I Customize My Package Plan?",
      content:
        "Definitely! We recognize that every traveler has distinct preferences. Our packages are flexible, allowing you to personalize your trip with specific destinations, activities, and services. Just let us know your requirements, and we'll create a plan tailored to your needs.",
    },
  ];

  const rightAccordionItems: AccordionItem[] = [
    {
      id: "collapseOneV2",
      title: "How Do I Get Support If I Face Issues During My Trip?",
      content:
        "Our customer support is available around the clock, ready to assist you whenever needed. Whether you need help with adjustments to your booking, emergency support, or guidance during your travels, we're just a message or call away to ensure your peace of mind.",
      show: true,
    },
    {
      id: "collapseTwoV2",
      title: "Which Payment Methods Do You Accept?",
      content:
        "We offer a variety of secure payment methods, including PayPal, Stripe, and Square, to make your transactions easy and secure. If you have a preferred payment method or need assistance with processing, our team is available to help guide you through the process.",
    },
  ];

  return (
    <section className="vs-faq space" data-bg-src="./assets/img/bg/404-faq.png">
      <div className="container">
        <div className="row">
          <div className="col-lg-auto mx-auto">
            <div className="title-area text-center">
              <span
                className="sec-subtitle text-capitalize fade-anim"
                data-direction="top"
              >
                Faq
              </span>
              <h2 className="sec-title fade-anim" data-direction="bottom">
                Asked Questions
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-lg-6">
            <div className="accordion accordion-style1" id="accordionLeft">
              {/* FAQ Item 1 */}
              <div className="accordion-item">
                <h6 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneV1"
                    aria-expanded="true"
                    aria-controls="collapseOneV1"
                  >
                    Why Should I Choose a Package Plan?
                  </button>
                </h6>
                <div
                  id="collapseOneV1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionLeft"
                >
                  <div className="accordion-body">
                    A package plan is ideal if you’re seeking a hassle-free,
                    cost-effective experience. It covers all your travel needs,
                    including accommodations, activities, and additional
                    services, often bundled with exclusive discounts.
                  </div>
                </div>
              </div>
              {/* FAQ Item 2 */}
              <div className="accordion-item">
                <h6 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwoV1"
                    aria-expanded="false"
                    aria-controls="collapseTwoV1"
                  >
                    How Does a Package Plan Benefit Me?
                  </button>
                </h6>
                <div
                  id="collapseTwoV1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionLeft"
                >
                  <div className="accordion-body">
                    Booking a package plan offers numerous advantages, including
                    exclusive discounts, access to premium services, and a
                    hassle-free experience. It simplifies your trip by combining
                    essential elements like accommodations and activities,
                    saving you both time and money.
                  </div>
                </div>
              </div>
              {/* FAQ Item 3 */}
              <div className="accordion-item">
                <h6 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThreeV1"
                    aria-expanded="false"
                    aria-controls="collapseThreeV1"
                  >
                    Can I Customize My Package Plan?
                  </button>
                </h6>
                <div
                  id="collapseThreeV1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionLeft"
                >
                  <div className="accordion-body">
                    Definitely! We recognize that every traveler has distinct
                    preferences. Our packages are flexible, allowing you to
                    personalize your trip with specific destinations,
                    activities, and services.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion accordion-style1" id="accordionRight">
              {/* FAQ Item 4 */}
              <div className="accordion-item">
                <h6 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneV2"
                    aria-expanded="true"
                    aria-controls="collapseOneV2"
                  >
                    How Do I Get Support If I Face Issues During My Trip?
                  </button>
                </h6>
                <div
                  id="collapseOneV2"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionRight"
                >
                  <div className="accordion-body">
                    Our customer support is available around the clock, ready to
                    assist you whenever needed. Whether you need help with
                    adjustments to your booking, emergency support, or guidance
                    during your travels, we’re just a message or call away to
                    ensure your peace of mind.
                  </div>
                </div>
              </div>
              {/* FAQ Item 5 */}
              <div className="accordion-item">
                <h6 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwoV2"
                    aria-expanded="false"
                    aria-controls="collapseTwoV2"
                  >
                    Which Payment Methods Do You Accept?
                  </button>
                </h6>
                <div
                  id="collapseTwoV2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionRight"
                >
                  <div className="accordion-body">
                    We offer a variety of secure payment methods, including
                    PayPal, Stripe, and Square, to make your transactions easy
                    and secure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionComponent;
