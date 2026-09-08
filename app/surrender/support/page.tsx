import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Surrender — Support",
  description: "Help with Surrender: subscriptions, your data, reminders and Face ID.",
};

export default function Page() {
  return (
    <LegalPage
      title="Support"
      effectiveDate="September 8, 2026"
      backHref="/surrender"
      backLabel="Back to Surrender"
    >
      <h2>Get in touch</h2>
      <p>
        Email <a href="mailto:fefeapphello@gmail.com">fefeapphello@gmail.com</a> and a person will
        reply. Tell us your device and iOS version if something is broken.
      </p>

      <h2>If you are in crisis</h2>
      <p>
        Surrender is a devotional habit, not therapy, medical treatment or crisis support, and nobody
        reads what you write in it. If you are struggling with self-harm or thoughts of suicide,
        please contact a real person now: Samaritans on <strong>116 123</strong> in the UK, or call or
        text <strong>988</strong> in the US. Elsewhere, your local emergency number.
      </p>

      <h2>Subscriptions</h2>
      <h3>How do I cancel?</h3>
      <p>
        Subscriptions are managed by Apple, not by us. On your iPhone, open Settings, tap your name at
        the top, then Subscriptions, then Surrender, then Cancel Subscription. If you cancel during a
        free trial you are not charged, as long as you do it at least 24 hours before the trial ends.
      </p>
      <h3>I paid but the app says I am not subscribed</h3>
      <p>
        Open Settings inside the app and tap Restore purchases. That asks Apple for your purchase
        history again. If it still does not appear, make sure you are signed in with the same Apple ID
        you bought it with, then email us.
      </p>
      <h3>Can I get a refund?</h3>
      <p>
        Refunds are handled by Apple and we cannot issue them ourselves. Go to reportaproblem.apple.com,
        sign in, and request a refund for the purchase.
      </p>

      <h2>Your writing</h2>
      <h3>Where is it stored?</h3>
      <p>
        On your phone, and nowhere else. Your confession, your check-ins and your notes are never
        uploaded, so we cannot read them, recover them, or send them to you.
      </p>
      <h3>How do I delete everything?</h3>
      <p>
        In the app, go to Settings, then Your data, then Erase everything. It is immediate and cannot
        be undone. Deleting the app removes it too.
      </p>
      <h3>Will my week survive a new phone?</h3>
      <p>
        Not yet. Because nothing is uploaded, moving to a new device starts you fresh. Signing in with
        Apple keeps your account but does not yet carry your week across.
      </p>

      <h2>The nightly check-in</h2>
      <h3>Why can I only open one day at a time?</h3>
      <p>
        By design. One day of the week opens per calendar day and cannot be rushed. The day rolls over
        at 4am, so checking in at one in the morning still counts for the night before.
      </p>
      <h3>I missed a night — did I lose my streak?</h3>
      <p>
        The streak counts honesty, not perfection, so answering &ldquo;it went wide&rdquo; never breaks
        it. Missing a night entirely does. You get one free restore, and after that the app offers a
        paid one; letting the run break and starting again is also fine.
      </p>

      <h2>Reminders and Face ID</h2>
      <h3>My reminder never arrives</h3>
      <p>
        Check iOS Settings, then Notifications, then Surrender, and make sure Allow Notifications is
        on. Focus modes and Scheduled Summary can also hold notifications back.
      </p>
      <h3>Face ID will not unlock the app</h3>
      <p>
        Your device passcode always works as a fallback — tap Unlock and then use the passcode option.
        You can turn the lock off entirely in Settings inside the app.
      </p>

      <h2>Scripture</h2>
      <p>
        Verses are from the World English Bible, which is in the public domain. The devotional writing
        and prayers are original.
      </p>

      <h2>Legal</h2>
      <p>
        <a href="/surrender/terms">Terms of Service</a> ·{" "}
        <a href="/surrender/privacy">Privacy Policy</a>
      </p>
      <p>New Age Technologies Ltd., United Kingdom</p>
    </LegalPage>
  );
}
