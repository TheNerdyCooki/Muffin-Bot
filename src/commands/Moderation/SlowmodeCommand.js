const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlowmodeCommand extends BaseCommand {
  constructor() {
    super('slowmode', 'Moderation', []);
  }

  run(client, message, args) {

    const messageArray = message.content.split(" ")
    const args = messageArray.slice(1)
    
    message.channel.setRateLimitPerUser(args[0])
    message.channel.send(`Channel Slowmode is now: ${args[0]}s`)

  }
}