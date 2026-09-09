import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Ihya — Terms of Service",
  description: "Terms of Service for Ihya by New Age Technologies Ltd.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="September 9, 2026"
      backHref="/"
      backLabel="Back to New Age Technologies"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading or using Ihya (the &quot;App&quot;), you agree to these Terms. If you do not
        agree, do not use the App. The App is operated by New Age Technologies Ltd., United Kingdom
        (&quot;we&quot;, &quot;us&quot;).
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Ihya calculates prayer times and the direction of the Qibla, displays the Hijri calendar,
        and lets you keep a private record of the prayers you have performed. Prayer times, the
        Qibla and the calendar are provided free of charge and without an account.
      </p>

      <h2>3. Prayer Times Are A Calculation, Not A Ruling</h2>
      <p>
        <strong>
          Prayer times are computed astronomically from your coordinates and the calculation method
          and madhhab you select. They are an aid, not a religious authority.
        </strong>{" "}
        Legitimate differences exist between calculation conventions, between schools of
        jurisprudence, and between a calculated time and the time observed by your local mosque. At
        high latitudes, where the sun does not reach the required depression angle, Fajr and Isha
        are derived using the rule you choose, and the App tells you when this has happened.
      </p>
      <p>
        Where the App&apos;s time differs from your mosque or your local authority, follow them. We
        make no warranty that any time shown is correct for your school, your location or your
        circumstances, and we accept no liability for a prayer performed outside its window.
      </p>

      <h2>4. We Do Not Issue Religious Rulings</h2>
      <p>
        Nothing in the App is a fatwa and nothing in it is a substitute for a qualified scholar. The
        App does not tell you whether an act is permissible, whether a prayer was valid, or how any
        matter of jurisprudence should be resolved. Questions of that kind should be taken to a
        scholar you trust.
      </p>

      <h2>5. Differences Between Schools</h2>
      <p>
        The App supports several calculation methods, both Asr conventions, and observances that are
        kept by some Muslims and considered an innovation by others. Where a practice is disputed
        the App marks it as such and lets you decide. Offering a setting is not an endorsement of
        any position, and we take no view on which school is correct.
      </p>

      <h2>6. Qur&apos;anic and Prophetic Text</h2>
      <p>
        Where the App displays Qur&apos;anic text, a translation, or a narration, it is reproduced
        verbatim from a published, verified source and attributed on screen. It is never generated,
        paraphrased or reworded. Any reflection or guidance written by us is presented in our own
        voice and must not be mistaken for revelation.
      </p>

      <h2>7. Subscriptions and Payments</h2>
      <p>
        Core features — prayer times, Qibla, adhan notifications, the Hijri calendar and prayer
        logging — are free and will remain so. Optional paid features are sold as auto-renewing
        subscriptions through your App Store account.
      </p>
      <ul>
        <li>Payment is charged to your App Store account on confirmation of purchase.</li>
        <li>
          A subscription renews automatically unless cancelled at least 24 hours before the end of
          the current period, and your account is charged for renewal within 24 hours of the end of
          that period.
        </li>
        <li>
          Where a free trial is offered, any unused portion is forfeited if you buy a subscription
          during the trial.
        </li>
        <li>
          You manage and cancel subscriptions in your App Store account settings. We cannot cancel
          on your behalf.
        </li>
        <li>
          Refunds are handled by Apple under their policy, not by us. Prices vary by territory and
          may change with notice.
        </li>
      </ul>

      <h2>8. Your Prayer Log</h2>
      <p>
        What you log stays on your device. We do not receive it, store it or analyse it. It is not
        ranked, published or shared with anyone. Deleting the App deletes it permanently and we
        cannot restore it. See our Privacy Policy.
      </p>

      <h2>9. Acceptable Use</h2>
      <p>
        Do not reverse engineer, decompile or redistribute the App, use it unlawfully, or attempt to
        interfere with its operation.
      </p>

      <h2>10. Intellectual Property</h2>
      <p>
        The App, its design, its name and its logo are owned by New Age Technologies Ltd. Scriptural
        text and translations remain the property of their respective publishers and are used under
        their terms.
      </p>

      <h2>11. Availability</h2>
      <p>
        We provide the App &quot;as is&quot; and do not guarantee uninterrupted availability. The
        App requires location access to compute times; if your device cannot provide a fix, those
        features will not work.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for indirect, incidental or
        consequential loss arising from your use of the App. Our total liability is limited to the
        amount you paid us in the twelve months preceding the claim. Nothing here excludes liability
        that cannot lawfully be excluded.
      </p>

      <h2>13. Age</h2>
      <p>The App is rated 4+ and intended for general audiences.</p>

      <h2>14. Termination</h2>
      <p>
        You may stop using the App at any time by deleting it. We may suspend access if these Terms
        are breached.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales, and the courts of England and
        Wales have exclusive jurisdiction.
      </p>

      <h2>16. Changes to Terms</h2>
      <p>
        We may update these Terms and will change the effective date above. Continued use after a
        change constitutes acceptance.
      </p>

      <h2>17. Severability</h2>
      <p>
        If any provision is held unenforceable, the remainder stays in force.
      </p>

      <h2>18. Apple-Required Terms</h2>
      <p>
        These Terms are between you and New Age Technologies Ltd., not Apple. Apple has no
        obligation to provide maintenance or support. Apple is not responsible for any claim
        relating to the App, including product liability, legal compliance or intellectual property
        claims. Apple and its subsidiaries are third-party beneficiaries of these Terms and may
        enforce them against you.
      </p>

      <h2>19. Contact Us</h2>
      <p>
        New Age Technologies Ltd., United Kingdom.{" "}
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
