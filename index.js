
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./src/utils/registry');
const config = require('./slappey.json');
const bottoken = require('./TOKEN.json')
const client = new Client();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(bottoken.token);
})();

