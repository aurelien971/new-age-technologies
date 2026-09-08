import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Surrender — Terms of Service",
  description:
    "Terms of Service for Surrender, the daily confession and devotional app by New Age Technologies Ltd.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="September 8, 2026"
      backHref="/surrender"
      backLabel="Back to Surrender"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using Surrender (&quot;the App&quot;), you agree to be bound by
        these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the
        App.
      </p>

      <h2>2. Description of Service</h2>
      <p>Surrender is a daily devotional and reflection app. It provides:</p>
      <ul>
        <li>A written seven-day devotional path generated from a short passage of text you write</li>
        <li>A nightly check-in where you record how your day went</li>
        <li>Written prayers intended to be read aloud</li>
        <li>A library of Scripture passages grouped by situation</li>
        <li>Optional reminders, ambient audio, and read-aloud narration</li>
      </ul>

      <h2>3. Not Medical, Psychological or Pastoral Advice</h2>
      <p>
        <strong>
          Surrender is a devotional habit. It is not therapy, counselling, medical treatment,
          addiction treatment, crisis support, or pastoral care, and it is not a substitute for any of
          them.
        </strong>
      </p>
      <p>
        The App is not staffed. Nothing you write in it is read, monitored, or responded to by a
        person, and no one is alerted if you write something concerning. The devotional and prayer
        text is generated on your device from a fixed library of written material; it is general
        reflective writing and is not tailored advice about your circumstances.
      </p>
      <p>
        If you are struggling with addiction, self-harm, or thoughts of suicide, please contact a
        qualified professional or a crisis service rather than relying on this App. In the United
        Kingdom you can call Samaritans on 116 123 at any hour. In the United States you can call or
        text 988. Elsewhere, contact your local emergency number.
      </p>

      <h2>4. Scripture and Content</h2>
      <p>
        Scripture quoted in the App is from the World English Bible, which is in the public domain.
        The devotional writing, prayers and all other written material in the App are original works
        owned by New Age Technologies Ltd.
      </p>
      <p>
        Devotional content reflects a broadly Christian perspective. It is offered as reflection, not
        as doctrinal instruction, and it does not represent the teaching of any particular church or
        denomination.
      </p>

      <h2>5. Subscriptions and Payments</h2>
      <h3>5.1 Free Use</h3>
      <p>
        The nightly check-in and the Scripture library for difficult nights are available without any
        subscription, and are not time-limited. The first two days of a written week are also free.
      </p>
      <h3>5.2 Surrender Subscription</h3>
      <p>An optional auto-renewable subscription unlocks the remainder of each written week:</p>
      <ul>
        <li>Weekly, with a free trial period disclosed at the point of purchase, then the displayed weekly price</li>
        <li>Yearly, billed annually at the displayed yearly price</li>
      </ul>
      <p>
        A one-time, non-subscription purchase to restore a missed night may also be offered. It is
        consumable and is not refundable once used.
      </p>
      <h3>5.3 Billing</h3>
      <ul>
        <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
        <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period</li>
        <li>Your account is charged for renewal within 24 hours prior to the end of the current period</li>
        <li>You can manage and cancel subscriptions in your Apple ID account settings</li>
        <li>Any unused portion of a free trial is forfeited when you purchase a subscription</li>
        <li>Prices are shown in your local currency and may vary by region</li>
      </ul>
      <h3>5.4 Refunds</h3>
      <p>
        Purchases are processed by Apple. Refund requests are handled by Apple under its own policy,
        and we cannot issue refunds directly.
      </p>
      <h3>5.5 Price Changes</h3>
      <p>
        We may change subscription prices. Changes take effect at the start of the next subscription
        period following the change, and you will be notified where the law requires it.
      </p>

      <h2>6. What You Write</h2>
      <p>
        You retain ownership of everything you write in the App. Your confession text, check-ins and
        notes are stored on your device and are not transmitted to us. We cannot read them, recover
        them, or restore them if the App is deleted or the device is lost. See the{" "}
        <a href="/surrender/privacy">Privacy Policy</a> for detail.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
        <li>Attempt to circumvent purchase, entitlement or usage controls</li>
        <li>Reproduce, redistribute or commercially exploit the App&apos;s written content</li>
        <li>Use automated systems to access the App</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        The App, including its design, code, written content and branding, is the property of New Age
        Technologies Ltd. and is protected by intellectual property laws. You are granted a limited,
        non-exclusive, non-transferable licence to use the App for personal, non-commercial purposes.
      </p>

      <h2>9. Availability</h2>
      <p>
        We do not guarantee that the App will be uninterrupted or error-free, and we may change,
        suspend or discontinue any part of it. Reminders depend on your device and on notification
        permissions, and may not be delivered.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind</li>
        <li>We shall not be liable for any indirect, incidental, special, consequential or punitive damages</li>
        <li>We shall not be liable for loss of data stored on your device</li>
        <li>Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim</li>
      </ul>
      <p>Nothing in these Terms excludes liability that cannot lawfully be excluded.</p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless New Age Technologies Ltd. from any claims, damages or
        expenses arising from your use of the App or violation of these Terms.
      </p>

      <h2>12. Age</h2>
      <p>
        The App is not directed to children under 13, and deals with adult subject matter including
        addiction and personal failure. You must be old enough to form a binding contract in your
        jurisdiction to purchase a subscription.
      </p>

      <h2>13. Termination</h2>
      <p>
        We may suspend or terminate access to the App at any time, with or without cause or notice.
        You may stop using the App at any time and may erase all of your data from within Settings.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Disputes are subject to the
        exclusive jurisdiction of the courts of England and Wales. This does not deprive you of the
        protection of mandatory consumer law in your country of residence.
      </p>

      <h2>15. Changes to Terms</h2>
      <p>
        We may update these Terms. We will post the updated Terms here and, where the change is
        material, within the App. Continued use after changes constitutes acceptance.
      </p>

      <h2>16. Severability</h2>
      <p>
        If any provision of these Terms is unenforceable, the remaining provisions continue in full
        force and effect.
      </p>

      <h2>17. Contact Us</h2>
      <p>If you have questions about these Terms, contact us at:</p>
      <p>
        New Age Technologies Ltd., United Kingdom
        <br />
        Email: <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>
      </p>
    </LegalPage>
  );
}
