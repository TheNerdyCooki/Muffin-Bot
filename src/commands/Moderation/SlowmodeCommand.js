const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlowmodeCommand extends BaseCommand {
  constructor() {
    super('slowmode', 'Moderation', []);
  }

  run(client, message, args) {
    
    message.channel.setRateLimitPerUser(args[0])
    message.channel.send(`Channel Slowmode is now: ${args[0]}s`)

  }
}