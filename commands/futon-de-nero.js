const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("futon-de-nero")
        .setDescription("布団で寝ろ"),
        execute: async function(interaction) {
            await interaction.deferReply({ephemeral: true});
            await interaction.editReply("お前も布団で寝ろ");
            await interaction.channel.send("# 布団で寝ろ");
    },
}