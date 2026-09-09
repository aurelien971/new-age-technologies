import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Ihya — Privacy Policy",
  description:
    "Privacy Policy for Ihya by New Age Technologies Ltd. Your prayer log and your location stay on your device.",
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="September 9, 2026"
      backHref="/"
      backLabel="Back to New Age Technologies"
    >
      <h2>1. The Short Version</h2>
      <p>
        <strong>
          Your prayer log and your location stay on your device. We do not have an account system,
          we do not have a server that stores your worship, and we could not read your log if we
          wanted to.
        </strong>{" "}
        Prayer times and the Qibla are calculated on the phone itself from your coordinates. There
        is one narrow exception, covered in section 4, where your coordinates are sent to Apple to
        turn them into a city name.
      </p>

      <h2>2. Who We Are</h2>
      <p>
        Ihya is operated by New Age Technologies Ltd., United Kingdom, the data controller for the
        purposes of UK GDPR and the EU GDPR. Contact:{" "}
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>.
      </p>

      <h2>3. What Stays On Your Device</h2>
      <p>The following never leaves your phone and is never transmitted to us:</p>
      <ul>
        <li>Every prayer you log, and whether you marked it prayed, late or missed</li>
        <li>Your streak and your qada&apos; (make-up) count</li>
        <li>Your calculation method, madhhab, high-latitude rule and Hijri offset</li>
        <li>Your display preferences, including the Arabic-Indic numeral setting</li>
        <li>Your coordinates, which are used to compute prayer times and the Qibla</li>
      </ul>
      <p>
        This is held in the App&apos;s private storage area on the device. It is generated on the
        device and read on the device, and there is no server copy. If you delete the App or lose
        the device, that data is gone and we cannot restore it.
      </p>

      <h2>4. Location</h2>
      <p>
        Ihya asks for your location while you are using the App because prayer times and the
        direction of the Qibla cannot be calculated without it. The calculation runs entirely on
        your device using a solar-position algorithm built into the App. No coordinates are sent to
        us, and we operate no location server.
      </p>
      <p>
        <strong>The one exception:</strong> to display the name of your city on the home screen,
        the App passes your coordinates to Apple&apos;s geocoding service, which is part of iOS.
        That request goes to Apple, not to us, and is governed by Apple&apos;s privacy policy. It
        contains your coordinates and nothing else — never your prayer log, and never an identifier
        for you.
      </p>
      <p>
        If you deny location access, prayer times and the Qibla will not work, but nothing else in
        the App is withheld and no data is collected.
      </p>

      <h2>5. What We Do Not Collect</h2>
      <ul>
        <li>
          <strong>No account.</strong> Ihya has no sign-up, no login and no user identifier.
        </li>
        <li>
          <strong>No advertising identifier.</strong> We do not collect the IDFA, we do not present
          an App Tracking Transparency prompt, and we do not track you across apps or websites.
        </li>
        <li>
          <strong>No advertising.</strong> There are no ads in Ihya and we sell no data to anyone,
          for any purpose, at any price.
        </li>
        <li>
          <strong>No analytics at present.</strong> This version of the App contains no analytics
          SDK. If that changes we will update this policy and say so plainly before it ships, and it
          will never include the content of your prayer log.
        </li>
      </ul>

      <h2>6. Purchases</h2>
      <p>
        Any subscription is processed by Apple through your App Store account. We never see your
        card, your billing address or your Apple ID. We receive only the anonymous receipt Apple
        provides to confirm that a subscription is active.
      </p>

      <h2>7. Children</h2>
      <p>
        Ihya is not directed at children under 13 and we do not knowingly collect data from them.
        Since the App collects no personal data to begin with, there is nothing for us to delete,
        but you may contact us with any concern.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Under UK and EU GDPR you have rights of access, rectification, erasure, restriction,
        portability and objection. Because your prayer log exists only on your device and we hold no
        copy, you exercise all of these directly: deleting the App erases everything. If you believe
        we hold data about you, write to us and we will respond within 30 days. You may also
        complain to the UK Information Commissioner&apos;s Office or your local supervisory
        authority.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        If we change this policy we will update the effective date above. A change that materially
        reduces your privacy — adding analytics, adding an account, transmitting anything you log —
        will be announced in the App before it takes effect, not buried here.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        New Age Technologies Ltd., United Kingdom.{" "}
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
