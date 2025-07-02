import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="mt-20 max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last Updated: June 2025</p>

      <p className="mb-6">
        Welcome to VasifyTech Technologies Pvt. Ltd. ("we", "our", "us"). Your
        privacy is important to us. This Privacy Policy describes how we
        collect, use, store, process and protect your data, including data
        processed through our WhatsApp platform, CRM systems, and integrations
        with eCommerce platforms such as Amazon, Flipkart, and IndiaMART.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Client Business Data:</strong> Company names, emails, WhatsApp
          numbers, API tokens provided to use our WhatsApp automation & CRM
          services.
        </li>
        <li>
          <strong>Customer Order & Contact Data:</strong> Through authorized
          APIs, we collect buyer names, phone numbers, shipping addresses, order
          details on behalf of our clients who are sellers on Amazon, Flipkart
          or IndiaMART.
        </li>
        <li>
          <strong>Website Data:</strong> IP addresses, device/browser data
          through cookies for analytics.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Data</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          To provide WhatsApp chat automation, marketing campaigns, and customer
          engagement tools.
        </li>
        <li>
          To display customer orders, addresses & delivery info inside client
          CRM dashboards.
        </li>
        <li>To comply with seller platform obligations and improve our products.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Retention</h2>
      <p className="mb-6">
        We store Personally Identifiable Information (PII) from Amazon &
        Flipkart orders for <strong>less than 31 days after delivery</strong> in
        accordance with Amazon’s Data Protection Policy. After this, data is
        securely deleted. WhatsApp conversation data is retained as per client
        configuration and applicable legal requirements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          Data is encrypted in transit using HTTPS (TLS 1.2+) and at rest using
          AES-256 encryption on our secured servers.
        </li>
        <li>
          Access controls restrict sensitive data only to authorized personnel,
          with audit logs of access and actions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Employee & Device Security
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          Employees use company-managed devices with security software. USB
          storage is disabled.
        </li>
        <li>
          Employee access is individually authenticated and granted only on a
          need-to-know basis.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Testing, Vulnerability & Change Management
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>New features are tested in staging environments before production.</li>
        <li>
          We perform code scans, vulnerability assessments, and have formal
          approval for production changes by our CTO.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Incident Response & Reporting
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          We continuously monitor systems for malicious activity and maintain an
          incident response plan.
        </li>
        <li>
          In case of data breaches, we isolate affected systems, notify impacted
          clients, rotate credentials, and report to Amazon
          (security@amazon.com) or other applicable partners.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Password & Credential Management
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          All systems enforce strong passwords (min 12 chars, uppercase,
          lowercase, numbers, special characters) rotated every 90 days.
        </li>
        <li>
          Secrets like API keys are never stored in code repositories and are
          managed through secure vaults.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Sharing of Information</h2>
      <p className="mb-6">
        We do not sell or trade your or your customers’ personal data. We only
        share data with:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          Authorized team members who require access to perform their roles.
        </li>
        <li>
          Partners like Amazon, Flipkart or WhatsApp in accordance with their
          platform integrations and APIs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Your Rights</h2>
      <p className="mb-6">
        You may request access, correction, export or deletion of personal data
        we store. Please email us at{" "}
        <a href="mailto:sudhanshu@vasifytech.com" className="text-blue-600 underline">
          sudhanshu@vasifytech.com Sushil@vasifytech.com
        </a>{" "}
        for assistance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
      <p className="mb-2">
        If you have any questions about this Privacy Policy, data processing or
        security measures:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Email:</strong>sudhanshu@vasifytech.com Sushil@vasifytech.com</li>
        <li><strong>Phone:</strong> +91 9004694689 +91 9769754446</li>
        <li><strong>Address:</strong> VasifyTech Technologies Pvt. Ltd., Mumbai, Maharashtra, India</li>
      </ul>

      <p className="mt-6">
        By using our website or services, you consent to this Privacy Policy.
      </p>
    </div>
  );
}
