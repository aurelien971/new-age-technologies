import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "FAIKE — Terms of Service",
  description: "Terms of Service for FAIKE, the AI Detector by New Age Technologies Ltd.",
};

export default function Page() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="June 21, 2026" backHref="/faike" backLabel="Back to FAIKE">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using FAIKE (&quot;the App&quot;), you agree to be bound by
        these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the
        App.
      </p>

      <h2>2. Description of Service</h2>
      <p>FAIKE is an AI-powered content verification tool that provides:</p>
      <ul>
        <li>Fact-checking of claims using AI and web search</li>
        <li>Detection of AI-generated images</li>
        <li>Detection of AI-written text</li>
        <li>Follow-up question capabilities for Pro subscribers</li>
      </ul>

      <h2>3. Accuracy Disclaimer</h2>
      <p>FAIKE provides AI-generated assessments and should not be treated as definitive truth.</p>
      <p>
        Results are probabilistic estimates based on available information and AI analysis. We do not
        guarantee the accuracy, completeness, or reliability of any analysis.
      </p>
      <p>You should:</p>
      <ul>
        <li>Use FAIKE as one tool among many for verifying information</li>
        <li>Exercise your own judgement when interpreting results</li>
        <li>Not rely solely on FAIKE for critical decisions</li>
        <li>Verify important claims through additional sources</li>
      </ul>
      <p>
        FAIKE is not a substitute for professional fact-checking, legal advice, medical advice, or
        expert opinion.
      </p>

      <h2>4. Subscriptions and Payments</h2>
      <h3>4.1 Free Tier</h3>
      <p>FAIKE offers a limited number of free scans that reset every 30 days.</p>
      <h3>4.2 FAIKE Pro</h3>
      <p>FAIKE Pro is available as an auto-renewable subscription with the following options:</p>
      <ul>
        <li>Monthly: Free trial for the first month, then the displayed monthly price</li>
        <li>Yearly: Billed annually at the displayed yearly price</li>
      </ul>
      <h3>4.3 Billing</h3>
      <ul>
        <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
        <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
        <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
        <li>You can manage and cancel subscriptions in your Apple ID account settings</li>
        <li>Any unused portion of a free trial period is forfeited when you purchase a subscription</li>
      </ul>
      <h3>4.4 Price Changes</h3>
      <p>
        We reserve the right to change subscription prices. Price changes will take effect at the
        start of the next subscription period following the date of the price change.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
        <li>Use the App to harass, defame, or harm others</li>
        <li>Submit content that is illegal, harmful, or violates third-party rights</li>
        <li>Attempt to circumvent usage limits or security measures</li>
        <li>Use the App&apos;s AI capabilities for purposes other than content verification</li>
        <li>Resell, redistribute, or commercially exploit the App or its outputs</li>
        <li>Use automated systems or bots to access the App</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        The App, including its design, code, features, and branding, is the property of New Age
        Technologies Ltd. and is protected by intellectual property laws. You are granted a limited,
        non-exclusive, non-transferable licence to use the App for personal, non-commercial purposes.
      </p>

      <h2>7. Content You Submit</h2>
      <p>
        You retain ownership of any content you submit to the App for analysis. By submitting content,
        you grant us a limited licence to process that content for the purpose of providing the
        service. We do not claim ownership of your content.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind</li>
        <li>We do not warrant that the App will be uninterrupted, error-free, or accurate</li>
        <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
        <li>Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim</li>
      </ul>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless New Age Technologies Ltd. from any claims, damages,
        or expenses arising from your use of the App or violation of these Terms.
      </p>

      <h2>10. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to the App at any time, with or
        without cause, with or without notice. Upon termination, your right to use the App ceases
        immediately.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes shall be subject to
        the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of material changes by posting
        the updated Terms within the App. Your continued use of the App after changes constitutes
        acceptance.
      </p>

      <h2>13. Severability</h2>
      <p>
        If any provision of these Terms is found to be unenforceable, the remaining provisions shall
        continue in full force and effect.
      </p>

      <h2>14. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at:</p>
      <p>
        New Age Technologies Ltd., United Kingdom
        <br />
        Email: <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>
      </p>
    </LegalPage>
  );
}