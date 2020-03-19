import React from "react";

import PrivacyPolicy from "./PrivacyPolicy";

import "./page.css";

export default function HomePage() {
  return (
    <>
      <main className="container">
        <section className="top">
          <h2>
            Take control of your data!{" "}
            <p className="subtitle">
              <small>
                When you use our services, you’re trusting us with your
                information. We understand this is a big responsibility and work
                hard to protect your information and put you in control.
              </small>
            </p>
          </h2>
        </section>
        <section className="privacy-policy">
          <PrivacyPolicy />
        </section>
        <section className="call-to-actions">
          <ul className="row">
            <li className="col-sm">
              <p className="card-title">Download My Data</p>
              <p className="subtitle card-subtitle">
                Download all data relating to you held by our organization
              </p>
            </li>
            <li className="col-sm">
              <p className="card-title">Erase Me</p>
              <p className="subtitle card-subtitle">
                Delete all data relating to you held by our organization
              </p>
            </li>
            <li className="col-sm">
              <p className="card-title">Consent</p>
              <p className="subtitle card-subtitle">
                Manage your consent to our different data processing activities
              </p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
