// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://45f594d1e000548366d036abc6d25e97@o4508703462588416.ingest.us.sentry.io/4508703464554496",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
