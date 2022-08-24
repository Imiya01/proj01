//Environment Variables


// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});



// All the room in the world for your code

app.event('app_home_opened', ({ event, say }) => {  
    say(`Hello world, <@${event.user}>!`);
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 5000);

  console.log('⚡️ Bolt app is running!');
})();
