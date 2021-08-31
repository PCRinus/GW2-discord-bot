const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with the user info"),
  async execute(interaction) {
    await interaction.reply(`Your tag: ${interaction.user.tag} \n Your id: ${interaction.user.id}`);
  },
};
