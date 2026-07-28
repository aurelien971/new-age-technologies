import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Opaque — Privacy Policy",
  description: "Privacy Policy for Opaque, the AI photo filter app by New Age Technologies Ltd.",
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="July 28, 2026" backHref="/opaque" backLabel="Back to Opaque">
      <h2>1. Introduction</h2>
      <p>
        Opaque (&quot;the App&quot;) is operated by New Age Technologies Ltd. (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;), registered at 40 Ossington Street, London W2 4LY, United Kingdom. This Privacy
        Policy explains how we collect, use, and protect your information when you use our App.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Photos You Edit</h3>
      <p>
        When you apply an AI filter or a custom edit, the photo you select is sent to third-party AI
        services — OpenAI and xAI — for processing, and the edited result is returned to your device.
        We do not store your original or edited photos on our servers. Edited results are saved
        locally on your device and, if you choose, to your Apple Photos library.
      </p>
      <h3>2.2 Custom Edit Prompts</h3>
      <p>
        If you type a custom editing instruction, the text of that instruction is stored on our
        systems (Google Firebase) so we can improve the App&apos;s filters and features. Please do not
        include personal information in your prompts.
      </p>
      <h3>2.3 Account Information</h3>
      <p>
        The App uses Firebase Authentication to create an account identifier for you (for example via
        Sign in with Apple). We store your account identifier and, if you provide them during
        onboarding, optional answers such as how you intend to use the App and how you heard about it.
      </p>
      <h3>2.4 Usage and Analytics Data</h3>
      <p>
        We collect usage data — such as which filters you view, apply, bookmark, and save, session
        counts, generation success rates and processing times, paywall interactions, game scores, and
        your device&apos;s country/region setting — to understand how the App is used and to improve
        it. This data is stored in Google Firebase and associated with your account identifier. We do
        not use this data to track you across other companies&apos; apps or websites.
      </p>
      <h3>2.5 Subscription Information</h3>
      <p>
        Payments are processed entirely by Apple through the App Store. We do not collect, store, or
        have access to your payment details, credit card information, or Apple ID. We record which
        subscription plan is active on your account.
      </p>

      <h2>3. Third-Party Services</h2>
      <h3>3.1 OpenAI and xAI</h3>
      <p>
        Photos and editing instructions you submit are processed by OpenAI&apos;s and xAI&apos;s APIs.
        Their respective data usage policies apply to this processing. For more information, visit{" "}
        <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noreferrer">
          openai.com/policies/privacy-policy
        </a>{" "}
        and{" "}
        <a href="https://x.ai/legal/privacy-policy" target="_blank" rel="noreferrer">
          x.ai/legal/privacy-policy
        </a>
        .
      </p>
      <h3>3.2 Google Firebase</h3>
      <p>
        We use Google Firebase for authentication, data storage, and analytics. Google&apos;s privacy
        policy applies to this infrastructure. For more information, visit{" "}
        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">
          firebase.google.com/support/privacy
        </a>
        .
      </p>
      <h3>3.3 Apple</h3>
      <p>
        Subscriptions and one-time purchases are handled by Apple. Apple&apos;s privacy policy applies
        to payment processing.
      </p>

      <h2>4. How We Use Your Information</h2>
      <ul>
        <li>To provide the App&apos;s photo editing features</li>
        <li>To operate your subscription and unlock the features you have paid for</li>
        <li>To understand which filters and features are most useful and improve the App</li>
        <li>To prevent abuse and maintain the security of the service</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>5. Data Retention</h2>
      <p>
        Usage data and prompts are retained while your account is active. You can request deletion of
        your account data at any time by contacting us at the address below, and we will delete it
        within 30 days.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        Under UK GDPR, you have the right to access, correct, delete, or export the personal data we
        hold about you, and to object to or restrict our processing of it. To exercise any of these
        rights, contact us at the email below.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        The App is not directed at children under 13, and we do not knowingly collect personal
        information from children under 13. If you believe a child has provided us with personal
        information, please contact us and we will delete it.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the updated policy at this
        page and update the effective date above.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>
        New Age Technologies Ltd., 40 Ossington Street, London W2 4LY, United Kingdom
        <br />
        Email: <a href="mailto:nicolle.aurelien@gmail.com">nicolle.aurelien@gmail.com</a>
      </p>
    </LegalPage>
  );
}
