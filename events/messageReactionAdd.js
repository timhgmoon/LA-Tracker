module.exports = {
  name: 'messageReactionAdd',
  execute(client, reaction, user) {
    channel = '986416350912192562'
    if (reaction.message.partial) reaction.message.fetch();
    if (reaction.partial) reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === '🍇') {
        console.log('testing 1')
        console.log(user.id)
        // reaction.message.guild.members.cache.get(user.id).roles.add('test1');
      }
    } else {
      return;
    }


  }
}