import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <Breadcrumb
        title="Privacy Policy"
        path="privacy policy"
        backgroundImage="/img/bg/privacy.jpg"
      />
      <section id="privacy" className="privacy space bg-theme-07">
        <div className="container">
          <div className="row gx-3 gx-xl-5 gy-5">
            <div className="col-lg-12 privacy-page">
              <div className="privacy-single">
                <h4 className="title">Privacy Policy</h4>
                <p>
                  This Privacy Policy governs the use of services provided by
                  HeavenQuest Inn & Suites Pvt Ltd, including its affiliates and
                  branches (collectively referred to as &quot;HeavenQuest Inn &
                  Suites&quot;). This document outlines our data handling
                  practices and is compliant with the Privacy Act. For any
                  questions or concerns, please reach out to our Privacy team at
                  <a href="mailto:info@heavenquestinn.com">
                    info@heavenquestinn.com
                  </a>
                  .
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">
                  Collection of Personally Identifiable Information
                </h4>
                <p>
                  HeavenQuest Inn & Suites collects personal data exclusively
                  for legitimate business needs in accordance with the Privacy
                  Act. We are committed to gathering information in a lawful,
                  transparent, and ethical manner. Personal details will only be
                  utilized once we have received proper authorization and
                  consent from our members. This policy specifically applies to
                  interactions between HeavenQuest Inn & Suites and its members,
                  and does not encompass the records of contractors or
                  employees, which are outside the scope of the Privacy Act.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Services</h4>
                <p>
                  To maintain high-quality service standards, HeavenQuest Inn &
                  Suites partners with trusted third-party service providers.
                  These external partners may have access to member data in
                  order to deliver services on our behalf. We ensure that all
                  service providers comply with our privacy guidelines and use
                  the data exclusively for authorized purposes.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Usage of Information</h4>
                <p>
                  We retain personal data only for as long as necessary to
                  fulfill the objectives specified in this policy. Once the data
                  is no longer needed, it is either securely erased or
                  anonymized. The security of your data is of utmost importance,
                  and we use SSL encryption to protect your information on our
                  website. We also use cookies to enhance user experience,
                  customize services, and assist with transactions. These
                  cookies do not collect personal information, but help us
                  understand device types used for accessing our site. Accepting
                  cookies improves your browsing experience without compromising
                  your privacy. HeavenQuest Inn & Suites is committed to
                  safeguarding your personal information.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Security of User Data</h4>
                <p>
                  All users have the right to access, modify, or delete their
                  personal data. To exercise these rights, please contact us at
                  <a href="mailto:info@heavenquestinn.com">
                    info@heavenquestinn.com
                  </a>
                  .
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Copyright and Security</h4>
                <p>
                  HeavenQuest Inn & Suites employs SSL encryption along with
                  other industry-standard security protocols to protect user
                  data. We also implement strict access control measures to
                  ensure that only authorized personnel can access sensitive
                  information.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Policy Updates</h4>
                <p>
                  HeavenQuest Inn & Suites reserves the right to revise and
                  update this Privacy Policy as necessary. Any changes will be
                  posted on our website, and we encourage users to review the
                  policy regularly to stay informed about how we protect your
                  privacy.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Contact Information</h4>
                <p>
                  For additional information or if you have any concerns about
                  this Privacy Policy, please contact us at
                  <a href="mailto:info@heavenquestinn.com">
                    info@heavenquestinn.com
                  </a>
                  or use the contact form on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
