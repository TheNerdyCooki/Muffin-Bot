const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('Avatar', 'Fun', []);
  }

  run(client, message, args) {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
}