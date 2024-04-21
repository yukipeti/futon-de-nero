const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("futon-de-nero")
        .setDescription("布団で寝ろ"),
        execute: async function(interaction) {
            await interaction.reply("# 布団で寝ろ");
    },
}