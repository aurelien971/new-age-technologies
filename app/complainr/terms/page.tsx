import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Complainr — Terms of Use",
  description: "The terms covering Complainr, its subscription and what it is not.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      effectiveDate="September 9, 2026"
      backHref="/complainr"
      backLabel="Back to Complainr"
    >
      <h2>Agreement</h2>
      <p>
        By using Complainr you agree to these terms. Complainr is operated by New Age Technologies
        Ltd. If you do not agree, delete the app.
      </p>

      <h2>What Complainr is</h2>
      <p>
        A private log of complaints made to you, with some analysis of the pattern. It is a
        note-taking app with opinions, and nothing more than that.
      </p>

      <h2>What Complainr is not</h2>
      <p>
        It is not therapy, counselling, mediation or medical advice, and nothing it generates should
        be treated as a professional opinion about your relationship or anybody in it. It is not a
        tool for monitoring another person: it reads no messages, records no location, and needs no
        access to anybody else&rsquo;s phone. It is not evidence, and it is not designed for or
        suitable for use in any legal proceeding.
      </p>
      <p>
        If you are experiencing abuse or feel unsafe in your relationship, please contact a real
        person rather than an app.
      </p>

      <h2>Your responsibilities</h2>
      <p>
        You are responsible for what you write and for how you use it. That includes anything you
        choose to share with the person the record is about. Do not use Complainr to harass anybody,
        and do not use it to record information about someone in a way that breaks the law where you
        live.
      </p>

      <h2>Subscription</h2>
      <p>
        Registering complaints, the log, the calendar and the trends are free. An optional
        subscription unlocks the reframe, the read, the advice, the report and voice notes.
      </p>
      <p>
        Payment is charged to your Apple ID at confirmation. The subscription renews automatically
        each month unless cancelled at least 24 hours before the period ends. Manage or cancel it in
        Settings on your iPhone, under your name, then Subscriptions. Deleting the app does not
        cancel a subscription. Prices may vary by region and may change with notice.
      </p>

      <h2>Artificial intelligence</h2>
      <p>
        Paid features send the text of your complaints to OpenAI for categorisation, reframing and
        summarising. Output is generated automatically and can be wrong, clumsy or unhelpful. Use
        your judgement — you know your relationship and the model does not.
      </p>

      <h2>Availability</h2>
      <p>
        We do not promise the app or its servers will always be available. Features may change or be
        withdrawn. If a paid feature is removed permanently, we will make that clear before it
        happens.
      </p>

      <h2>Your content</h2>
      <p>
        What you write remains yours. You grant us only the permission needed to store it, process
        it and show it back to you. We do not sell it and we do not publish it.
      </p>

      <h2>Liability</h2>
      <p>
        Complainr is provided as it is. To the extent the law allows, New Age Technologies Ltd is not
        liable for indirect or consequential loss arising from your use of it, including anything
        that follows from sharing a report. Nothing here limits liability that cannot be limited by
        law.
      </p>

      <h2>Termination</h2>
      <p>
        You can stop using Complainr at any time by deleting it. We may suspend access if the app is
        used to break these terms or the law.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of England and Wales.</p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a>
      </p>
    </LegalPage>
  );
}
