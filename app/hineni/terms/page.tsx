import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Hineni — Terms of Service",
  description:
    "Terms of Service for Hineni, the daily Jewish practice app by New Age Technologies Ltd.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="September 9, 2026"
      backHref="/hineni"
      backLabel="Back to Hineni"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using Hineni (&quot;the App&quot;), you agree to be bound by
        these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the
        App.
      </p>

      <h2>2. Description of Service</h2>
      <p>Hineni is a daily Jewish practice app. It provides:</p>
      <ul>
        <li>The Hebrew date, the festival calendar, and halachic times calculated for your location</li>
        <li>Candle lighting and havdalah times, and reminders for them</li>
        <li>A seven-day path toward one practice you choose</li>
        <li>A daily check-in where you record whether you were present</li>
        <li>Liturgy shown in Hebrew, transliteration and English, read aloud one line at a time</li>
        <li>A step-by-step guide to laying tefillin, and a blessings reference</li>
        <li>Guides to the major festivals at three levels of observance</li>
        <li>An optional record of yahrzeit dates, with reminders</li>
      </ul>

      <h2>3. Times Are a Calculation, Not a Ruling</h2>
      <p>
        <strong>
          Every time the App displays — candle lighting, sunrise, the latest Shema, nightfall, the end
          of Shabbat — is computed on your device from the position of the sun at your coordinates. It
          is a calculation. It is not a halachic ruling, and the App is not a posek.
        </strong>
      </p>
      <p>The calculation assumes sea level and standard atmospheric refraction. In particular:</p>
      <ul>
        <li>Communities, calendars and published luchot routinely differ by a minute or two, and some by more</li>
        <li>Altitude, obstructed horizons and local custom can all move a time</li>
        <li>Above roughly the Arctic Circle some of these times do not exist for weeks at a time, and the App shows a dash rather than inventing one</li>
        <li>Candle lighting defaults to eighteen minutes before sunset, and to local custom where the App knows it — forty minutes in Jerusalem, thirty in Haifa</li>
      </ul>
      <p>
        <strong>
          Where it matters, follow your own community, your own rabbi and your own published times.
        </strong>{" "}
        We provide these times in good faith and with care, but we do not warrant their accuracy for
        any halachic purpose, and you should not rely on the App alone for a time-bound obligation.
      </p>

      <h2>4. Nusach, and What the Text Is</h2>
      <p>
        The liturgy in the App is <strong>Nusach Ashkenaz</strong>, and the App says so where the text
        is shown. Nusach Sefard, Edot HaMizrach and Chabad word parts of it differently. If one of
        those is your nusach, follow your own siddur where they disagree.
      </p>
      <p>
        Hebrew liturgical text is ancient and in the public domain. Scriptural passages in English are
        from the 1917 Jewish Publication Society Tanakh, which is in the public domain. All other
        English translation, explanatory writing, the seven-day paths and the festival guides are
        original works owned by New Age Technologies Ltd. No text from any modern edition in copyright
        appears in the App.
      </p>
      <p>
        Explanatory and guide content is offered as an introduction, not as halachic instruction, and
        it does not represent the position of any particular community, movement or rabbinic authority.
      </p>

      <h2>5. Not Advice</h2>
      <p>
        The App is a practice aid. It is not religious counsel, pastoral care, therapy, medical
        treatment, bereavement support, or a substitute for any of them.
      </p>
      <p>
        The App is not staffed. Nothing you write in it is read, monitored, or responded to by a
        person, and no one is alerted if you write something concerning. If you are struggling, please
        contact a qualified professional, your rabbi, or a crisis service rather than relying on this
        App. In the United Kingdom you can call Samaritans on 116 123 at any hour. In the United States
        you can call or text 988. In Israel, ERAN is on 1201. Elsewhere, contact your local emergency
        number.
      </p>
      <p>
        Fasting, and the restrictions of Yom Kippur and Tisha B&apos;Av, carry real medical risk for
        some people. The App describes them; it does not advise you to undertake them. If you are
        pregnant, unwell, or taking medication, speak to a doctor and to your rabbi.
      </p>

      <h2>6. Yahrzeit Dates</h2>
      <p>
        The App can store yahrzeit dates and remind you of them. It converts the civil date you enter
        to a Hebrew date and recurs on that. Please note:
      </p>
      <ul>
        <li>
          A Jewish day begins at sunset. If the death occurred after sunset, the correct date is the
          following day — the App tells you this, but it cannot know which applies and does not ask.
        </li>
        <li>
          Communities differ on the first yahrzeit, on a death on the 30th of a month that is short in
          a given year, and on a death in Adar of a leap year. The App applies one common practice.
        </li>
        <li>
          <strong>
            Reminders depend on your device and on notification permission, and may not be delivered.
            Do not rely on the App as the only record of a yahrzeit.
          </strong>
        </li>
      </ul>

      <h2>7. Subscriptions and Payments</h2>
      <h3>7.1 What is free, permanently</h3>
      <p>
        Candle lighting, every halachic time, the festival calendar and guides, and the daily check-in
        are available without any subscription and are not time-limited. The first two days of a
        seven-day path are also free.
      </p>
      <h3>7.2 Hineni Subscription</h3>
      <p>An optional auto-renewable subscription unlocks the remainder of each seven-day path:</p>
      <ul>
        <li>Weekly, with a free trial period disclosed at the point of purchase, then the displayed weekly price</li>
        <li>Yearly, billed annually at the displayed yearly price</li>
      </ul>
      <p>
        A one-time, non-subscription purchase to restore a missed day may also be offered. It is
        consumable and is not refundable once used.
      </p>
      <h3>7.3 Billing</h3>
      <ul>
        <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
        <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period</li>
        <li>Your account is charged for renewal within 24 hours prior to the end of the current period</li>
        <li>You can manage and cancel subscriptions in your Apple ID account settings</li>
        <li>Any unused portion of a free trial is forfeited when you purchase a subscription</li>
        <li>Prices are shown in your local currency and may vary by region</li>
      </ul>
      <h3>7.4 Refunds</h3>
      <p>
        Purchases are processed by Apple. Refund requests are handled by Apple under its own policy, and
        we cannot issue refunds directly.
      </p>
      <h3>7.5 Price Changes</h3>
      <p>
        We may change subscription prices. Changes take effect at the start of the next subscription
        period following the change, and you will be notified where the law requires it.
      </p>

      <h2>8. What You Write</h2>
      <p>
        You retain ownership of everything you write in the App. Your answers, your notes and your
        yahrzeit records are stored on your device and are not transmitted to us. We cannot read them,
        recover them, or restore them if the App is deleted or the device is lost. See the{" "}
        <a href="/hineni/privacy">Privacy Policy</a> for detail.
      </p>

      <h2>9. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
        <li>Attempt to circumvent purchase, entitlement or usage controls</li>
        <li>Reproduce, redistribute or commercially exploit the App&apos;s original written content</li>
        <li>Use automated systems to access the App</li>
      </ul>

      <h2>10. Intellectual Property</h2>
      <p>
        The App, including its design, code, original written content and branding, is the property of
        New Age Technologies Ltd. and is protected by intellectual property laws. You are granted a
        limited, non-exclusive, non-transferable licence to use the App for personal, non-commercial
        purposes. Public-domain material remains in the public domain and nothing here claims otherwise.
      </p>

      <h2>11. Availability</h2>
      <p>
        We do not guarantee that the App will be uninterrupted or error-free, and we may change, suspend
        or discontinue any part of it. Reminders depend on your device and on notification permissions,
        and may not be delivered.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind</li>
        <li>We shall not be liable for any indirect, incidental, special, consequential or punitive damages</li>
        <li>
          We shall not be liable for any loss, religious or otherwise, arising from reliance on a time,
          a date or a guide displayed in the App
        </li>
        <li>We shall not be liable for loss of data stored on your device</li>
        <li>Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim</li>
      </ul>
      <p>Nothing in these Terms excludes liability that cannot lawfully be excluded.</p>

      <h2>13. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless New Age Technologies Ltd. from any claims, damages or
        expenses arising from your use of the App or violation of these Terms.
      </p>

      <h2>14. Age</h2>
      <p>
        The App is not directed to children under 13. You must be old enough to form a binding contract
        in your jurisdiction to purchase a subscription.
      </p>

      <h2>15. Termination</h2>
      <p>
        We may suspend or terminate access to the App at any time, with or without cause or notice. You
        may stop using the App at any time and may erase all of your data from within Settings.
      </p>

      <h2>16. Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Disputes are subject to the exclusive
        jurisdiction of the courts of England and Wales. This does not deprive you of the protection of
        mandatory consumer law in your country of residence.
      </p>

      <h2>17. Changes to Terms</h2>
      <p>
        We may update these Terms. We will post the updated Terms here and, where the change is
        material, within the App. Continued use after changes constitutes acceptance.
      </p>

      <h2>18. Severability</h2>
      <p>
        If any provision of these Terms is unenforceable, the remaining provisions continue in full force
        and effect.
      </p>

      <h2>19. Apple-Required Terms</h2>
      <p>
        Apple requires the following where an app is licensed through the App Store. These terms sit
        alongside the rest of this agreement.
      </p>
      <ul>
        <li>
          <strong>Acknowledgement.</strong> This agreement is between you and New Age Technologies Ltd.
          only, and not with Apple. We, not Apple, are solely responsible for the App and its content.
        </li>
        <li>
          <strong>Scope of licence.</strong> The licence granted to you is a non-transferable licence to
          use the App on any Apple-branded products that you own or control, as permitted by the Usage
          Rules in the Apple Media Services Terms and Conditions.
        </li>
        <li>
          <strong>Maintenance and support.</strong> We are solely responsible for providing any
          maintenance and support for the App. Apple has no obligation to furnish any maintenance or
          support services.
        </li>
        <li>
          <strong>Warranty.</strong> We are solely responsible for any product warranties, whether express
          or implied by law, to the extent not effectively disclaimed. If the App fails to conform to any
          applicable warranty, you may notify Apple, and Apple will refund the purchase price of the App
          to you. To the maximum extent permitted by applicable law, Apple has no other warranty
          obligation whatsoever with respect to the App.
        </li>
        <li>
          <strong>Product claims.</strong> We, not Apple, are responsible for addressing any claims
          relating to the App or your possession and use of it, including product liability claims, any
          claim that the App fails to conform to any legal or regulatory requirement, and claims arising
          under consumer protection, privacy or similar legislation.
        </li>
        <li>
          <strong>Intellectual property.</strong> In the event of any third-party claim that the App or
          your possession and use of it infringes that third party&apos;s intellectual property rights,
          we, not Apple, are solely responsible for the investigation, defence, settlement and discharge
          of that claim.
        </li>
        <li>
          <strong>Legal compliance.</strong> You represent and warrant that you are not located in a
          country subject to a U.S. Government embargo or designated as a &quot;terrorist supporting&quot;
          country, and that you are not listed on any U.S. Government list of prohibited or restricted
          parties.
        </li>
        <li>
          <strong>Third-party terms.</strong> You must comply with any applicable third-party terms of
          agreement when using the App.
        </li>
        <li>
          <strong>Third-party beneficiary.</strong> Apple and Apple&apos;s subsidiaries are third-party
          beneficiaries of this agreement, and upon your acceptance of these Terms Apple will have the
          right (and will be deemed to have accepted the right) to enforce this agreement against you as
          a third-party beneficiary.
        </li>
        <li>
          <strong>Contact for questions and complaints.</strong> New Age Technologies Ltd., United
          Kingdom &mdash; <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>.
        </li>
      </ul>

      <h2>20. Contact Us</h2>
      <p>If you have questions about these Terms, contact us at:</p>
      <p>
        New Age Technologies Ltd., United Kingdom
        <br />
        Email: <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>
      </p>
    </LegalPage>
  );
}
