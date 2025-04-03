import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <Breadcrumb
        title="Terms of Service"
        path="terms"
        backgroundImage="/img/bg/terms.jpg"
      />
      <section id="privacy" className="privacy space bg-theme-07">
        <div className="container">
          <div className="row gx-3 gx-xl-5 gy-5">
            <div className="col-lg-12 privacy-page">
              <div className="privacy-single">
                <h4 className="title">Attention</h4>
                <p>
                  Welcome to the official website of HeavenQuest Inn & Suites
                  (&quot;the Site&quot;). Please take a moment to carefully
                  review these Terms of Use before accessing or using this Site.
                  By using the Site, you agree to adhere to and be bound by
                  these Terms. If you do not accept these terms, please refrain
                  from using this Site.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Acceptance of Agreement</h4>
                <p>
                  By using this Site, you acknowledge and agree to the terms and
                  conditions set forth in this Terms of Use Agreement
                  (“Agreement”). This Agreement represents the complete and
                  exclusive understanding between you and HeavenQuest Inn &
                  Suites regarding your use of the Site, replacing all prior
                  agreements, representations, or warranties related to the
                  Site, its content, products, and services. We may update or
                  modify this Agreement from time to time, and the most current
                  version will be posted on the Site. You are encouraged to
                  review this Agreement regularly before using the Site.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Use of Website</h4>
                <p>
                  HeavenQuest Inn & Suites grants you the right to view, print,
                  or download content, graphics, forms, and documents from the
                  Site for personal, non-commercial purposes only. You may not
                  alter, delete, or modify any content, graphics, or copyright
                  notices. You are prohibited from reproducing, republishing,
                  publicly displaying, performing, or distributing any materials
                  for commercial purposes, unless explicitly authorized by this
                  Agreement. The intellectual property rights of all materials
                  on this Site are owned by or licensed to HeavenQuest Inn &
                  Suites. Unauthorized use may result in the violation of
                  copyright, trademark, and other intellectual property rights.
                  You are granted a limited, non-exclusive, revocable license to
                  access and use the Site’s content in accordance with these
                  Terms. This license may be revoked by HeavenQuest Inn & Suites
                  at any time.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Editing, Deleting, and Modification</h4>
                <p>
                  We reserve the right to edit, remove, or modify any content,
                  information, or documents on the Site at our sole discretion
                  and without prior notice.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Copyright</h4>
                <p>
                  All content on this website, including text, images, and code,
                  is protected under copyright laws. Commercial distribution of
                  this material is strictly prohibited. The intellectual
                  property, including copyrights and trademarks, belongs to
                  HeavenQuest Inn & Suites, its affiliates, or third-party
                  licensors. All content on the Site is protected by both
                  domestic and international copyright and trademark laws. You
                  are prohibited from altering, copying, reproducing, uploading,
                  transmitting, or distributing any content from the Site
                  without permission.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Terms Policy</h4>
                <p>
                  HeavenQuest Inn & Suites reserves the right to modify, update,
                  or amend our Terms of Use at any time. Any changes will be
                  posted on this page, and it is your responsibility to check
                  for updates periodically.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Refund and Returns Policy</h4>
                <p>
                  For bookings made under the VACATION PURCHASE AGREEMENT, the
                  terms related to cancellations, charges, and no-show penalties
                  are outlined in the specific terms for each hotel offer.
                  Customers can raise any issues of dissatisfaction within 10
                  days of service use, and refunds will be subject to
                  administrative fees, ASF, and applicable GST. This Refund
                  Policy does not apply to the VACATION PURCHASE AGREEMENT
                  separately executed between HeavenQuest Inn & Suites and the
                  customer. All matters regarding disputes, jurisdiction, and
                  resolution of refund requests will be governed by the terms of
                  the VACATION PURCHASE AGREEMENT, and no refunds or disputes
                  will be entertained outside of those terms.
                </p>
              </div>

              <div className="privacy-single">
                <h4 className="title">Payments</h4>
                <p>
                  All payments made to HeavenQuest Inn & Suites must be
                  processed in accordance with the terms outlined in the
                  VACATION PURCHASE AGREEMENT. For payment-related inquiries or
                  issues, please contact us at
                  <a href="mailto:info@heavenquestinn.com">
                    info@heavenquestinn.com
                  </a>
                  .
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
