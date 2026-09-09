import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Complainr — Privacy Policy",
  description: "What Complainr stores, what leaves your phone, and what never does.",
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="September 9, 2026"
      backHref="/complainr"
      backLabel="Back to Complainr"
    >
      <h2>The short version</h2>
      <p>
        Complainr does not ask for your email, your phone number or your name beyond a first name you
        choose. There is no account to create and nothing to sign in to. What you write is stored on
        your device, and a copy is kept in our database so the app can work across sessions and so we
        can see how the app is actually used.
      </p>
      <p>
        Two things never leave your phone at all: the days you mark for cycle tracking, and any
        screenshot you attach to an entry.
      </p>

      <h2>Who we are</h2>
      <p>
        Complainr is operated by New Age Technologies Ltd. If you want anything explained or deleted,
        email <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>.
      </p>

      <h2>What we store</h2>
      <h3>On your device</h3>
      <p>
        Everything: your complaints and their timestamps, the people you are tracking, any context
        you add, whether an entry ended in tears, any screenshots you attach, and any days you mark
        for cycle tracking. This is the working copy the app reads from, and the app is fully usable
        with no network connection at all.
      </p>

      <h3>In our database</h3>
      <p>
        We keep a copy of your complaints — the text, the category, the reframe, how much it
        mattered, whether it was typed or spoken, whether it ended in tears, and when it happened —
        along with a first name, a randomly generated identifier, and summary figures such as your
        weekly totals and most common categories. This is what lets us understand how the app is
        being used and improve it.
      </p>

      <h3>Never sent anywhere</h3>
      <ul>
        <li>
          <strong>Cycle tracking days.</strong> These are health data about somebody other than you,
          and they stay on your device. They are not uploaded, not sent to any AI service, and not
          included in any analysis that leaves the phone.
        </li>
        <li>
          <strong>Screenshots you attach.</strong> Images stay in the app&rsquo;s private storage on
          your device. Text is read out of them on the device itself, using Apple&rsquo;s built-in
          text recognition. The image itself is never uploaded.
        </li>
      </ul>

      <h2>Identity</h2>
      <p>
        The app signs you in anonymously. That means a random identifier is generated for your
        install, with no email, no password, and no link to your Apple ID. We cannot tell who you
        are from it. If you delete and reinstall the app, you get a new identifier and the previous
        one is orphaned.
      </p>

      <h2>Artificial intelligence</h2>
      <p>
        If you use the paid features, the text of a complaint — and any context you added — is sent
        to OpenAI to be categorised, reframed and summarised. Voice notes are sent as audio to be
        transcribed, and the audio is discarded immediately afterwards. Your name, your
        partner&rsquo;s name, your identifier and your cycle data are not sent.
      </p>
      <p>
        These requests go through our own servers rather than directly from the app, so no API
        credentials are ever stored on your phone. OpenAI does not use data sent through the API to
        train its models.
      </p>

      <h2>Analytics</h2>
      <p>
        We record which features are used and when — entries registered, reports opened, screens
        viewed, purchases — so we can tell what works. These are tied to your anonymous identifier.
        We do not track you across other apps or websites, we run no advertising, and we do not use
        the App Tracking Transparency framework because we have nothing to ask you for.
      </p>

      <h2>Payments</h2>
      <p>
        Subscriptions are handled entirely by Apple. We never see your card details, your billing
        address or your Apple ID. We are told only whether a subscription is active.
      </p>

      <h2>Other people</h2>
      <p>
        Complainr is a record of your own experience. It holds names you type and words you attribute
        to other people, which means it contains information about somebody who has not agreed to
        being in it. We recommend telling them it exists — and in testing, that is also the point at
        which the app starts to work.
      </p>

      <h2>Deleting your data</h2>
      <p>
        Settings, then <strong>Erase everything</strong>, deletes every complaint, person and
        screenshot from your device immediately. To have the copy in our database deleted as well,
        email us and it will be removed within thirty days.
      </p>

      <h2>Children</h2>
      <p>Complainr is not directed at children and is not intended for anyone under 13.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes in a way that affects what we collect, the new version will appear
        here with a new effective date.
      </p>
    </LegalPage>
  );
}
