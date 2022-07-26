// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Hello to you too 👋! 
 Hi, My name is Soumava Das. Currently doing my B.tech degree in Computer Science Engineering from Institute of Technical Education and Research, Bhubaneswar. 
 An open source enthusiast, currently making some projects  using Next.js, learning JavaScript. 
 Welcome to my discord channel`
  
});