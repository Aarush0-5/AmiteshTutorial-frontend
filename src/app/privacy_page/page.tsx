
import React from "react";

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6 text-white bg-black">
      <h1>Privacy Policy</h1>

      <p>
        Welcome to <strong>Amitesh Tutorials</strong>. Your privacy is important to us. This
        page explains what data we collect and how we use it.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We use <strong>Google Analytics (GA4)</strong> to understand how visitors interact
        with our website. GA4 collects anonymous data such as:
      </p>
      <ul>
        <li>Pages you visit</li>
        <li>Time spent on pages</li>
        <li>Device type and browser</li>
        <li>Geographic location (coarse, based on IP)</li>
      </ul>

      <h2>How We Use This Information</h2>
      <p>
        The collected data is used to:
      </p>
      <ul>
        <li>Improve website content and user experience</li>
        <li>Analyze traffic trends and usage patterns</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our website uses cookies for analytics purposes. These cookies help us collect
        anonymous usage data. You can disable cookies in your browser if you prefer.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Google Analytics is a third-party service provided by Google LLC. For more
        information on how Google handles data, please visit{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Privacy Policy
        </a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. Please check this page
        periodically for any updates.
      </p>

      <p>
        Last updated: <strong>6 January 2026</strong>
      </p>
    </main>
  );
}
