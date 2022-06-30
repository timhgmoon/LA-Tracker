module.exports = {
  name: 'messageReactionAdd',
  execute(client, reaction, user) {
    channel = process.env.channel

    const test1Emoji = '🍇';
    const test2Emoji = '🍎';
    const test3Emoji = '🥑';

    if (reaction.message.partial) reaction.message.fetch();
    if (reaction.partial) reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === test1Emoji) {
        reaction.message.guild.members.cache.get(user.id).roles.add('986397688323010560')
      } else if (reaction.emoji.name === test2Emoji) {
        reaction.message.guild.members.cache.get(user.id).roles.add('986398873893367809')
      } else if (reaction.emoji.name === test3Emoji) {
        reaction.message.guild.members.cache.get(user.id).roles.add('986419698910515200')
      }
    } else {
      return;
    }


  }
}