import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Surrender — Privacy Policy",
  description:
    "Privacy Policy for Surrender by New Age Technologies Ltd. What you write stays on your device.",
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="September 8, 2026"
      backHref="/surrender"
      backLabel="Back to Surrender"
    >
      <h2>1. The Short Version</h2>
      <p>
        <strong>
          What you write in Surrender — your confession, your nightly check-ins and your notes — is
          stored on your device and is never sent to us or to anyone else.
        </strong>{" "}
        We cannot read it. We receive anonymous usage statistics about how the App is used, and, if
        you choose to sign in, an account identifier from Apple. That is the whole of it.
      </p>

      <h2>2. Who We Are</h2>
      <p>
        Surrender is operated by New Age Technologies Ltd., United Kingdom, the data controller for
        the purposes of UK GDPR and the EU GDPR. Contact:{" "}
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>.
      </p>

      <h2>3. What Stays On Your Device</h2>
      <p>The following never leaves your phone and is never transmitted to us:</p>
      <ul>
        <li>The sentence you write about what you are struggling with</li>
        <li>The seven-day plan generated from it, including all devotional and prayer text</li>
        <li>Every nightly check-in, including the answer you select and any note you add</li>
        <li>Your first name, chosen tradition, closeness answer and focus selections</li>
        <li>Your reminder time, sound and haptic preferences</li>
      </ul>
      <p>
        This is held in the App&apos;s private storage area on the device. It is generated on the
        device, it is read on the device, and there is no server copy. If you delete the App or lose
        the device, that data is gone and we cannot restore it.
      </p>
      <p>
        You can erase all of it at any time from Settings → Your data → Erase everything, which
        deletes it immediately and permanently.
      </p>

      <h2>4. What We Do Collect</h2>
      <h3>4.1 Usage analytics</h3>
      <p>
        We use Google Firebase Analytics to understand how the App is used in aggregate — which
        screens people reach, where they stop, whether a feature is used at all. This includes:
      </p>
      <ul>
        <li>Events such as opening a screen, completing onboarding, saving a check-in or starting a purchase</li>
        <li>A randomly generated app instance identifier</li>
        <li>Device model, operating system version, language and country</li>
        <li>Approximate location, derived from IP address at city level and no finer</li>
        <li>Coarse properties such as your selected tradition, whether reminders are on, and which streak band you fall into</li>
      </ul>
      <p>
        <strong>
          The text you write is never included in analytics. Where the length of what you wrote is
          recorded, only the number of characters is sent — never the content.
        </strong>{" "}
        The theme your week was matched to (for example &quot;anxiety&quot;) is recorded as a single
        word so that we know which paths are used; it is not linked to anything you typed.
      </p>
      <h3>4.2 Sign in with Apple</h3>
      <p>
        If you choose to sign in, Apple gives us a stable user identifier and, if you allow it, your
        name and an email address. Apple&apos;s Private Relay lets you hide your real address, and we
        work with whatever you choose to share. We use this only to identify your account. We do not
        email you marketing.
      </p>
      <h3>4.3 Purchases</h3>
      <p>
        Subscriptions are processed by Apple. We never see your card details. We receive only the
        entitlement status — whether a subscription is active — through Apple&apos;s StoreKit.
      </p>
      <h3>4.4 Crash and performance data</h3>
      <p>
        Apple provides aggregated crash and performance reports if you have opted in to share
        analytics with developers in your iOS settings.
      </p>

      <h2>5. App Tracking Transparency</h2>
      <p>
        The App asks, once, whether you allow tracking. This is used to measure which of our posts or
        adverts led to an install. If you decline, the App works identically and no advertising
        identifier is collected. You can change your answer at any time in iOS Settings → Privacy
        &amp; Security → Tracking.
      </p>
      <p>
        Nothing you write is ever used for advertising, ever linked to an advertising identifier, or
        ever shared with an advertising network.
      </p>

      <h2>6. Why We Are Allowed To Process This</h2>
      <ul>
        <li>
          <strong>Contract</strong> — to provide the App and your subscription
        </li>
        <li>
          <strong>Legitimate interests</strong> — to keep the App working, to prevent abuse, and to
          understand aggregate usage
        </li>
        <li>
          <strong>Consent</strong> — for notifications, and for tracking under App Tracking
          Transparency, each of which you can withdraw at any time
        </li>
      </ul>

      <h2>7. Who We Share It With</h2>
      <p>
        We do not sell your data, and we do not share it with advertisers or data brokers. The only
        third parties involved are:
      </p>
      <ul>
        <li>
          <strong>Google (Firebase)</strong> — analytics and remote configuration, acting as our
          processor
        </li>
        <li>
          <strong>Apple</strong> — sign-in, payment processing and App Store delivery
        </li>
      </ul>
      <p>
        These providers may process data outside the UK and EEA. Where they do, transfers are covered
        by standard contractual clauses or an equivalent approved mechanism.
      </p>

      <h2>8. How Long We Keep It</h2>
      <ul>
        <li>On-device data: until you erase it or delete the App</li>
        <li>Analytics events: retained by Firebase for up to 14 months, then deleted automatically</li>
        <li>Account identifier: until you ask us to delete your account</li>
      </ul>

      <h2>9. Your Rights</h2>
      <p>
        Under UK and EU data protection law you have the right to access, correct, delete, restrict,
        or object to our processing of your personal data, and the right to data portability. Most of
        this you can exercise yourself: everything meaningful is on your device, and Erase everything
        removes it instantly.
      </p>
      <p>
        For anything held by us, email{" "}
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a> and we will respond within
        30 days. You may also complain to the UK Information Commissioner&apos;s Office at ico.org.uk,
        or to your local supervisory authority.
      </p>

      <h2>10. Children</h2>
      <p>
        The App is not directed to children under 13 and we do not knowingly collect data from them.
        If you believe a child has provided us with personal data, contact us and we will delete it.
      </p>

      <h2>11. Security</h2>
      <p>
        On-device data is protected by iOS file protection and, if you enable it, by Face ID, Touch ID
        or your passcode. Data in transit to our providers is encrypted with TLS. No system is
        perfectly secure, but the strongest protection here is structural: the sensitive material
        never leaves your device in the first place.
      </p>

      <h2>12. Changes</h2>
      <p>
        We may update this policy. The effective date above will change, and material changes will be
        notified within the App.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        New Age Technologies Ltd., United Kingdom
        <br />
        Email: <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>
      </p>
    </LegalPage>
  );
}
