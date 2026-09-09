import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Complainr — Support",
  description: "Help with Complainr: subscriptions, your data, voice notes and categories.",
};

export default function Page() {
  return (
    <LegalPage
      title="Support"
      effectiveDate="September 9, 2026"
      backHref="/complainr"
      backLabel="Back to Complainr"
    >
      <h2>Get in touch</h2>
      <p>
        Email <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a> and a person will
        reply. Tell us your device and iOS version if something is broken.
      </p>

      <h2>Using it</h2>
      <h3>How do I log the same complaint again?</h3>
      <p>
        Swipe the row left, the way you would archive a chat. It is registered again, timed now. An
        Undo appears for a few seconds in case that was your thumb rather than your intention.
      </p>

      <h3>It happened an hour ago, not now</h3>
      <p>
        Tap the row to see every time that complaint has been made, then tap any one of them to
        correct its time. Registering always assumes now; this is the only place that assumption gets
        overridden.
      </p>

      <h3>Why is my entry filed under &ldquo;Unfiled&rdquo;?</h3>
      <p>
        Categories come from your own entries rather than a fixed list. Very short complaints
        sometimes have too little to go on before the AI has seen them, and subscribers get automatic
        filing that is much better at this. You can always tap a category, or tap <strong>New</strong>{" "}
        to name your own.
      </p>

      <h3>The microphone does not seem to use Whisper</h3>
      <p>
        Voice notes transcribed by Whisper are part of the subscription. Without it, the app falls
        back to Apple&rsquo;s on-device dictation, which still works and never leaves your phone.
      </p>

      <h2>Subscriptions</h2>
      <h3>How do I cancel?</h3>
      <p>
        Subscriptions are managed by Apple, not by us. On your iPhone, open Settings, tap your name
        at the top, then Subscriptions, then Complainr, then Cancel Subscription.
      </p>

      <h3>I paid but the app says I am not subscribed</h3>
      <p>
        Open the subscription screen and tap <strong>Restore a purchase</strong>. That asks Apple for
        your purchase history and re-applies it. Make sure you are signed into the same Apple ID you
        bought it with.
      </p>

      <h3>What do I get for it?</h3>
      <p>
        The reframe under each complaint, the read, advice, the report and Whisper voice notes.
        Registering complaints, the log, the calendar and the trends are free and stay free.
      </p>

      <h2>Your data</h2>
      <h3>How do I delete everything?</h3>
      <p>
        Settings, then <strong>Erase everything</strong>. That clears every complaint, person and
        screenshot from your device immediately. Email us if you also want the copy in our database
        removed.
      </p>

      <h3>Is my cycle tracking sent anywhere?</h3>
      <p>
        No. Days you mark stay on your device. They are not uploaded and are never included in
        anything sent to an AI service.
      </p>

      <h3>I reinstalled and my complaints are gone</h3>
      <p>
        Complainr stores your record on the device, so deleting the app deletes it. There is no
        restore yet. If this matters to you, tell us — it moves up the list.
      </p>

      <h2>Should I tell my partner?</h2>
      <p>
        Yes. Complainr is a record of your own experience rather than a way of monitoring somebody,
        and it works considerably better when it is not a secret.
      </p>
    </LegalPage>
  );
}
