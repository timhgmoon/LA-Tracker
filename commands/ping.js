const { slashCommandBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  async execute(interaction) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('primary')
        .setLabel('Primary')
        .setStyle('PRIMARY')
        .setEmoji('🍇'),
      );

      const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Test Title')
        .setURL('https://discord.js.org')
        .setDescription('Test Description');
    await interaction.reply({content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });  }
};