const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js')


module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {


    console.log([
			client.user.tag + ' has logged in.',
			client.user.tag + 'has loaded commands',
			client.user.tag + 'has loaded events'
		].join('\n'));

		const activities = [
			`${this.client.guilds.cache.size} servers!`,
			`${this.client.channels.cache.size} channels!`,
			`${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`
		];

		let i = 0;
		setInterval(() => this.client.user.setActivity(`${this.client.prefix}help | ${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 15000);


		
  }


}