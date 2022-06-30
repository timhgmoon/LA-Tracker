const { slashCommandBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reactionrole')
    .setDescription('Sets up a reaction role message!'),
  async execute(interaction) {
    const test1Emoji = '🍇';
    const test2Emoji = '🍎';
    const test3Emoji = '🥑';

    const embed = new MessageEmbed()
      .setColor('#e42643')
      .setTitle('Choose a role!')
      .setDescription('Choose a role to get pinged!\n\n'
        + `${test1Emoji} for test1\n`
        + `${test2Emoji} for test2\n`
        + `${test3Emoji} for test3\n`);

    const msg = await interaction.reply({ content: 'You can react with Unicode emojis!', embed: [embed], fetchReply: true });
    const filter = msg => msg.content.includes('🍇');
    // const collector = interaction.channel.createMessageCollector({ filter, time: 15000 });
    // collector.on('collect', m => {
    //   console.log(`Collected ${m.content}`);
    // });

    // collector.on('end', collected => {
    //   console.log(`Collected ${collected.size} items`);
    // });
    try {
      await msg.react(test1Emoji);
      await msg.react(test2Emoji);
      await msg.react(test3Emoji);
    } catch (error) {
      console.error('One of the emojis failed to react: ', error);
    }

  }
};