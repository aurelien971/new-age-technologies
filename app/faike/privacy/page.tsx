import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "FAIKE — Privacy Policy",
  description: "Privacy Policy for FAIKE, the AI Detector by New Age Technologies Ltd.",
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="June 21, 2026" backHref="/faike" backLabel="Back to FAIKE">
      <h2>1. Introduction</h2>
      <p>
        FAIKE (&quot;the App&quot;) is operated by New Age Technologies Ltd. (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;), registered at 40 Ossington Street, London W2 4LY, United Kingdom. This Privacy
        Policy explains how we collect, use, and protect your information when you use our App.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Content You Submit for Analysis</h3>
      <p>
        When you use FAIKE, you may submit text claims, images, or voice recordings for analysis. This
        content is sent to third-party AI services, including OpenAI, for processing. We do not store
        your submitted content on our servers after analysis is complete.
      </p>
      <h3>2.2 Voice Recordings</h3>
      <p>
        If you use the voice input feature, your audio is temporarily recorded on your device, sent to
        OpenAI&apos;s Whisper API for transcription, and then deleted from your device. We do not retain
        voice recordings.
      </p>
      <h3>2.3 Images</h3>
      <p>
        Images you upload for analysis are sent to OpenAI&apos;s API for processing. We do not store
        your images on our servers. Thumbnail previews may be stored locally on your device for your
        scan history.
      </p>
      <h3>2.4 Scan History</h3>
      <p>
        Your scan history, including results, timestamps, and text previews, is stored locally on your
        device using Apple&apos;s UserDefaults. This data never leaves your device and is not accessible
        to us.
      </p>
      <h3>2.5 Subscription Information</h3>
      <p>
        If you subscribe to FAIKE Pro, your payment is processed entirely by Apple through the App
        Store. We do not collect, store, or have access to your payment details, credit card
        information, or Apple ID.
      </p>
      <h3>2.6 Analytics and Diagnostics</h3>
      <p>
        We do not currently collect analytics, crash reports, or usage data. This may change in future
        updates, and this policy will be updated accordingly.
      </p>

      <h2>3. Third-Party Services</h2>
      <h3>3.1 OpenAI</h3>
      <p>
        Content you submit for analysis is processed by OpenAI&apos;s API. OpenAI&apos;s data usage
        policies apply to this processing. For more information, visit{" "}
        <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noreferrer">
          openai.com/policies/privacy-policy
        </a>
        .
      </p>
      <h3>3.2 Apple</h3>
      <p>
        Subscription purchases and account management are handled by Apple. Apple&apos;s privacy policy
        applies:{" "}
        <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noreferrer">
          apple.com/legal/privacy
        </a>
        .
      </p>

      <h2>4. Data Retention</h2>
      <ul>
        <li>Submitted content: Not retained after analysis. Sent to OpenAI for real-time processing only.</li>
        <li>Scan history: Stored locally on your device until you clear it. Limited to 50 items.</li>
        <li>Voice recordings: Deleted immediately after transcription.</li>
        <li>Images: Not stored on our servers. Local thumbnails are stored on device only.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        All communication with third-party APIs is encrypted using HTTPS/TLS. Your scan history is
        stored locally on your device and protected by your device&apos;s built-in security features,
        such as passcode and Face ID.
      </p>

      <h2>6. Children&apos;s Privacy</h2>
      <p>
        FAIKE is not directed at children under the age of 13. We do not knowingly collect personal
        information from children. If you believe a child has provided us with personal information,
        please contact us.
      </p>

      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request deletion of your data</li>
        <li>Opt out of data processing</li>
      </ul>
      <p>
        Since we do not store your data on our servers, most data control is in your hands. You can
        clear your scan history at any time within the App.
      </p>
      <p>
        For users in the European Economic Area (EEA), you have rights under the General Data
        Protection Regulation (GDPR). For users in California, you have rights under the California
        Consumer Privacy Act (CCPA).
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by
        posting the new policy within the App. Your continued use of the App after changes constitutes
        acceptance of the updated policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>
        New Age Technologies Ltd., United Kingdom
        <br />
        Email: <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>
      </p>
    </LegalPage>
  );
}