'use strict';

const { App, ExpressReceiver } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

const receiver = new ExpressReceiver({ signingSecret: process.env.SLACK_SIGNING_SECRET });

const app = new App({
  receiver,
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: 'debug',
});

app.message(/^hello$/i, async ({ message, say }) => {
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `こんにちは <@${message.user}>さん`,
        },
      },
    ],
  });
});

app.event('reaction_added', async ({ event, say }) => {
  console.log({ event });

  // bot へのリアクションにだけ反応するように
  if (event.item_user !== 'U041XR6R4P5') return;

  await say({
    text: `Thanks for the :${event.reaction}:`,
    thread_ts: event.item.ts,
  });
});

app.message(/^おみくじ$/, ({ message, say }) => {
  const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  const lot = lots[Math.floor(Math.random() * lots.length)];
  const text = `<@${message.user}> 今の運勢は ${lot} です`;

  say(text);
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
