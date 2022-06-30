module.exports = {
  name: 'messageReactionAdd',
  execute(client, reaction, user) {
    if (reaction.partial) {
      try {
        reaction.fetch();
      } catch (error) {
        console.error('something went wrong when fetrching the message:', error);
        return;
      }
    }
    console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);

  }
}