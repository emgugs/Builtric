'use client'

import type { ReactNode } from 'react'

function LegalEmailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className="text-primary-black underline-offset-2 hover:underline">
      {email}
    </a>
  )
}

function LegalBody({ children }: { children: ReactNode }) {
  return (
    <div className="t-body flex flex-col gap-2.5 text-primary-black [&_li]:list-disc [&_ul]:ml-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2.5">
      {children}
    </div>
  )
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <h2 className="t-heading text-primary-black">{title}</h2>
      {children}
    </div>
  )
}

function PrivacyPolicySection() {
  return (
    <LegalSection title="Privacy Policy">
      <LegalBody>
        <p>
          <strong>Last updated: March 7, 2026</strong>
        </p>
        <p>
          At Builtric, your privacy is important to us. This Privacy Policy explains what personal
          information we collect, why we collect it, and how we handle it.
        </p>
        <p>
          <strong>The short version:</strong> We collect only what we need, we never sell your data,
          and you can request its deletion at any time.
        </p>
        <p>1. Information We Collect</p>
        <p>
          We collect information you provide directly to us, as well as data generated through your
          use of our platform. This may include:
        </p>
        <ul>
          <li>
            <p>
              <strong>Account information</strong> — your name, email address, and password when you
              register.
            </p>
          </li>
          <li>
            <p>
              <strong>Usage data</strong> — pages visited, features used, timestamps, and interaction
              logs.
            </p>
          </li>
          <li>
            <p>
              <strong>Device &amp; technical data</strong> — IP address, browser type, operating system,
              and referral URLs.
            </p>
          </li>
          <li>
            <p>
              <strong>Communications</strong> — any messages or support requests you send us.
            </p>
          </li>
          <li>
            <p>
              <strong>Payment information</strong> — billing details processed securely by our
              third-party payment provider. Builtric does not store full card numbers.
            </p>
          </li>
        </ul>
        <p>2. How We Use Your Information</p>
        <p>
          We use the information we collect to operate, maintain, and improve our services, including
          to process transactions, respond to enquiries, send product updates (with your consent),
          monitor usage trends, and detect fraudulent activity.
        </p>
        <p>3. Information Sharing</p>
        <p>
          Builtric does not sell, rent, or trade your personal information. We may share data with
          trusted service providers who help operate our platform, when required by law, or in
          connection with a business transfer — in each case with appropriate safeguards in place.
        </p>
        <p>4. Data Retention</p>
        <p>
          We retain your personal data for as long as your account is active or as needed to provide
          our services. You may request deletion at any time, though some data may be kept for
          legitimate legal purposes after account closure.
        </p>
        <p>5. Cookies &amp; Tracking</p>
        <p>
          We use cookies and similar technologies to remember preferences and understand how you use
          our platform. You can control cookie behaviour through your browser settings, though
          disabling certain cookies may affect functionality.
        </p>
        <p>6. Security</p>
        <p>
          We implement industry-standard measures to protect your data against unauthorised access or
          disclosure. No method of internet transmission is 100% secure, however, we take reasonably
          necessary precautions in order to safeguard your information.
        </p>
        <p>7. Your Rights</p>
        <p>
          Depending on your location, you may have the right to access, correct, delete, or export
          your personal data, and to withdraw consent where processing is based on it. To exercise
          any of these rights, contact us at <LegalEmailLink email="privacy@builtric.com" />. We
          shall endeavor to respond within 30 days.
        </p>
        <p>8. Children&apos;s Privacy</p>
        <p>
          Our services are not directed to individuals under the age of 16. If you believe a child
          has submitted personal data to us, please contact us and we will remove it promptly.
        </p>
        <p>9. Changes to This Policy</p>
        <p>
          We may update this policy from time to time. Material changes will be communicated by email
          or notice on our platform, along with a revised &quot;Last updated&quot; date.
        </p>
      </LegalBody>
    </LegalSection>
  )
}

function TermsSection() {
  return (
    <LegalSection title="Terms &amp; Conditions">
      <LegalBody>
        <p>
          <strong>Last updated: March 7, 2026</strong>
        </p>
        <p>
          These Terms and Conditions govern your access to and use of Builtric&apos;s website,
          applications, and services. By using our Service, you agree to these Terms. In case you
          do not any agree to any of these Terms, and still continue to use the Service, we shall
          not liable for any loss, claim, or damages, in any form or manner whatsoever.
        </p>
        <p>1. Use of the Service</p>
        <p>
          Builtric grants you a limited, non-exclusive licence to use the Service for personal or
          business purposes. You agree not to use the Service for unlawful purposes, attempt to gain
          unauthorised access, transmit harmful content, reverse engineer any part of the platform, or
          use automated tools to access the Service without our authorisation.
        </p>
        <p>2. Account Registration</p>
        <p>
          You must provide accurate and up-to-date information when registering. You are responsible
          for keeping your login credentials confidential and for all activity under your account.
          Contact <LegalEmailLink email="support@builtric.com" /> immediately if you suspect
          unauthorised access.
        </p>
        <p>3. Intellectual Property</p>
        <p>
          All content, software, logos, and trademarks within the Service are owned by Builtric or its
          licensors. Nothing in these Terms transfers ownership rights to you. Any content you submit
          remains yours, but by submitting it you grant Builtric a licence to use and display it for
          the purpose of operating the Service.
        </p>
        <p>4. Subscriptions &amp; Billing</p>
        <p>
          Paid subscriptions are billed on a recurring basis. Subscriptions renew automatically unless
          cancelled before the next billing date. Fees are exclusive of applicable taxes. For refund
          enquiries, contact <LegalEmailLink email="billing@builtric.com" />.
        </p>
        <p>5. Limitation of Liability</p>
        <p>
          To the fullest extent permitted by law, Builtric shall not be liable for any indirect,
          incidental, or consequential damages arising from your use of the Service. Our total
          liability for any claim shall not exceed the greater of the amount you paid to Builtric in
          the preceding twelve months or £100, whichever is lesser.
        </p>
        <p>6. Disclaimer of Warranties</p>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind. Builtric does not
          guarantee that the Service will be uninterrupted, error-free, or free of harmful components.
        </p>
        <p>7. Indemnification</p>
        <p>
          You agree to indemnify and hold harmless Builtric, its affiliates, officers, employees,
          and agents from any claims, liabilities, losses, and expenses (including reasonable legal
          fees) arising out of your use of the Service, any content you submit, or your breach of
          these Terms or applicable law. This clause survives termination of these Terms.
        </p>
        <p>8. Third-Party Links &amp; Services</p>
        <p>
          The Service may link to or integrate with third-party services. Builtric is not responsible
          for the content or practices of those third parties, and your use of them is at your own
          risk. Builtric shall not be held liable in case of the occurrence of any such interruption
          in the Service, glitch, error, or harmful components.
        </p>
        <p>9. Termination</p>
        <p>
          Builtric may suspend or terminate your access at any time for conduct that violates these
          Terms. You may close your account at any time by contacting us.
        </p>
        <p>10. Governing Law</p>
        <p>
          These Terms are governed by the laws of England and Wales. Any disputes shall be subject to
          the exclusive jurisdiction of the courts of England and Wales. We encourage you to
          contact <LegalEmailLink email="legal@builtric.com" /> first to resolve any issue
          informally.
        </p>
        <p>11. Changes to These Terms</p>
        <p>
          We may revise these Terms at any time. Continued use of the Service after changes take
          effect constitutes acceptance. We will give at least 14 days&apos; notice of any material
          changes.
        </p>
        <p>
          For any questions about these policies, contact <LegalEmailLink email="legal@builtric.com" />
          .
        </p>
      </LegalBody>
    </LegalSection>
  )
}

export function LegalPageContent() {
  return (
    <section className="w-full bg-white px-site pb-[132px] pt-page-hero">
      <div className="site-container flex flex-col gap-[111px] py-6">
        <h1 className="t-heading text-primary-black">Privacy Policy &amp; Terms of Service</h1>
        <PrivacyPolicySection />
        <TermsSection />
      </div>
    </section>
  )
}
