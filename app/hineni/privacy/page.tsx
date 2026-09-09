import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Hineni — Privacy Policy",
  description:
    "Privacy Policy for Hineni by New Age Technologies Ltd. Your location is used on your device and never uploaded.",
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="September 9, 2026"
      backHref="/hineni"
      backLabel="Back to Hineni"
    >
      <h2>1. The Short Version</h2>
      <p>
        <strong>
          Your location is used on your phone to work out sunset, and is stored on your phone. It is
          never uploaded. What you write — your nightly answers, your notes, and the names and dates
          of the people you are remembering — never leaves the device either.
        </strong>{" "}
        We receive anonymous usage statistics about how the App is used, and the name of the city you
        selected. That is the whole of it.
      </p>

      <h2>2. Who We Are</h2>
      <p>
        Hineni is operated by New Age Technologies Ltd., United Kingdom, the data controller for the
        purposes of UK GDPR and the EU GDPR. Contact:{" "}
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>.
      </p>

      <h2>3. Location</h2>
      <p>
        Candle lighting, every prayer time and the end of Shabbat are calculated from the position of
        the sun at your coordinates. The App therefore needs a place. It does not need anything else,
        and it does not need to tell anyone where you are.
      </p>
      <ul>
        <li>
          Your coordinates are used <strong>on the device</strong> to run the calculation, and are
          saved in the App&apos;s private storage on the device.
        </li>
        <li>
          They are <strong>never transmitted to us</strong>, never attached to an analytics event,
          and never shared with anyone.
        </li>
        <li>
          The <strong>name</strong> of the place — &quot;London&quot;, &quot;Jerusalem&quot; — is sent
          as a coarse property so we can see roughly which communities use the App. The numbers behind
          it are not.
        </li>
        <li>
          You never have to grant location access at all. Choosing a city from the built-in list
          produces exactly the same times, and someone who refuses location still gets a correct
          candle lighting time.
        </li>
        <li>The App requests location only while it is in use. It does not track you in the background.</li>
      </ul>

      <h2>4. What Stays On Your Device</h2>
      <p>The following never leaves your phone and is never transmitted to us:</p>
      <ul>
        <li>The sentence you write about what you wish you could do</li>
        <li>Every daily answer, including the option you select and any note you add</li>
        <li>The seven-day path generated for you, including all of its written text</li>
        <li>
          <strong>Every yahrzeit you save</strong> — the person&apos;s name, your relationship to
          them, the date, and any note
        </li>
        <li>Your name, your Hebrew name, your movement, and how much you said you currently practise</li>
        <li>Your coordinates, your reminder times and your display preferences</li>
      </ul>
      <p>
        This is held in the App&apos;s private storage area on the device. It is generated on the
        device, it is read on the device, and there is no server copy. If you delete the App or lose
        the device, that data is gone and we cannot restore it.
      </p>
      <p>
        You can erase all of it at any time from Settings → Erase everything, which deletes it
        immediately and permanently.
      </p>

      <h2>5. What We Do Collect</h2>
      <h3>5.1 Usage analytics</h3>
      <p>
        We use Google Firebase to understand how the App is used in aggregate — which screens people
        reach, where they stop, and whether a feature is used at all. This includes:
      </p>
      <ul>
        <li>
          Events such as opening a screen, completing onboarding, saving a daily answer, finishing the
          tefillin flow, opening a holiday guide, or starting a purchase
        </li>
        <li>A randomly generated identifier for the install</li>
        <li>Device model, operating system version, language and country</li>
        <li>Approximate location, derived from IP address at city level and no finer</li>
        <li>
          Coarse properties such as the movement you selected, whether you keep the Israel or diaspora
          festival schedule, which streak band you fall into, and the name of your chosen city
        </li>
      </ul>
      <p>
        <strong>
          The text you write is never included in analytics. Where the length of something you wrote
          is recorded, only the number of characters is sent — never the content.
        </strong>{" "}
        When you search the blessings list we record how long the query was and whether it found
        anything, so we can find gaps in the food list; <strong>we do not record what you typed</strong>.
      </p>
      <p>
        <strong>Nothing about a yahrzeit is ever sent.</strong> Analytics records only that you have
        saved at least one, never a name, a relationship or a date.
      </p>
      <h3>5.2 Anonymous identity</h3>
      <p>
        The App signs in to Firebase anonymously so that usage can be counted per install rather than
        per event. <strong>There is no account.</strong> We do not ask for your email address, we do
        not ask you to sign in, and we cannot connect an install to a person.
      </p>
      <h3>5.3 Purchases</h3>
      <p>
        Subscriptions are processed by Apple. We never see your card details. We receive only the
        entitlement status — whether a subscription is active — through Apple&apos;s StoreKit.
      </p>
      <h3>5.4 Crash and performance data</h3>
      <p>
        Apple provides aggregated crash and performance reports if you have opted in to share
        analytics with developers in your iOS settings.
      </p>

      <h2>6. No Tracking, and No Advertising Identifier</h2>
      <p>
        Hineni does not track you. It does not collect the advertising identifier (IDFA), it does not
        ask for tracking permission, it does not link anything about you to data from other companies,
        and it shares nothing with advertising networks or data brokers.
      </p>
      <p>There is no advertising in the App.</p>

      <h2>7. Notifications</h2>
      <p>
        Reminders are scheduled and delivered by your own device. They are not sent from a server, and
        we do not know whether one arrived or was opened until the App tells us anonymously that a
        notification was tapped.
      </p>
      <p>
        The App deliberately schedules <strong>no notification into Shabbat or a festival</strong>. That
        is a design decision rather than a privacy one, but it means the App is silent for those hours
        whatever your settings say.
      </p>

      <h2>8. Why We Are Allowed To Process This</h2>
      <ul>
        <li>
          <strong>Contract</strong> — to provide the App and your subscription
        </li>
        <li>
          <strong>Legitimate interests</strong> — to keep the App working, to prevent abuse, and to
          understand aggregate usage
        </li>
        <li>
          <strong>Consent</strong> — for notifications and for location, both of which you can withdraw
          at any time in iOS Settings
        </li>
      </ul>

      <h2>9. Who We Share It With</h2>
      <p>
        We do not sell your data, and we do not share it with advertisers or data brokers. The only
        third parties involved are:
      </p>
      <ul>
        <li>
          <strong>Google (Firebase)</strong> — analytics, anonymous authentication and remote
          configuration, acting as our processor
        </li>
        <li>
          <strong>Apple</strong> — payment processing and App Store delivery
        </li>
      </ul>
      <p>
        These providers may process data outside the UK and EEA. Where they do, transfers are covered
        by standard contractual clauses or an equivalent approved mechanism.
      </p>

      <h2>10. How Long We Keep It</h2>
      <ul>
        <li>On-device data: until you erase it or delete the App</li>
        <li>Analytics events: retained by Firebase for up to 14 months, then deleted automatically</li>
        <li>Anonymous install identifier: until you delete the App and ask us to remove it</li>
      </ul>

      <h2>11. Your Rights</h2>
      <p>
        Under UK and EU data protection law you have the right to access, correct, delete, restrict, or
        object to our processing of your personal data, and the right to data portability. Most of this
        you can exercise yourself: everything meaningful is on your device, and Erase everything removes
        it instantly.
      </p>
      <p>
        For anything held by us, email{" "}
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a> and we will respond within 30
        days. You may also complain to the UK Information Commissioner&apos;s Office at ico.org.uk, or to
        your local supervisory authority.
      </p>

      <h2>12. Religion Is a Special Category of Data</h2>
      <p>
        UK and EU law treats information revealing religious belief as a special category requiring
        extra protection. We have designed around that rather than around a consent checkbox:
      </p>
      <ul>
        <li>The App holds no name, no email address and no account</li>
        <li>Your movement and your practice answers are recorded only as coarse, unlinked properties</li>
        <li>Everything specific to you — what you wrote, who you are remembering — stays on the device</li>
      </ul>
      <p>
        The practical consequence is that we hold no record capable of identifying you as an individual,
        let alone as an individual of any particular religion.
      </p>

      <h2>13. Children</h2>
      <p>
        The App is not directed to children under 13 and we do not knowingly collect data from them. If
        you believe a child has provided us with personal data, contact us and we will delete it.
      </p>

      <h2>14. Security</h2>
      <p>
        On-device data is protected by iOS file protection and, if you enable it, by Face ID, Touch ID or
        your passcode. Data in transit to our providers is encrypted with TLS. No system is perfectly
        secure, but the strongest protection here is structural: the sensitive material never leaves your
        device in the first place.
      </p>

      <h2>15. Changes</h2>
      <p>
        We may update this policy. The effective date above will change, and material changes will be
        notified within the App.
      </p>

      <h2>16. Contact Us</h2>
      <p>
        New Age Technologies Ltd., United Kingdom
        <br />
        Email: <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>
      </p>
    </LegalPage>
  );
}
