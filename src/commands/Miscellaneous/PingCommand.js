const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'Miscellaneous', []);
  }

  run(client, message, args) {
    
    
    const ping = new Discord.MessageEmbed()
    .setDescription(`🏓\`${client.ws.ping}\`ms`);


    message.channel.send(ping);
  }
}