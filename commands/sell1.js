const Discord = require('discord.js')
const fs = require('fs')
const {
  MessageButton,
} = require("discord.js");


module.exports = {
    name: "setupsell1",
    description: "สร้างที่ขายโค๊ต1",
    run: async (client, interaction) => {
      const Embed = new Discord.EmbedBuilder()
      .setColor('Blue')
      .setTitle('<a:9717ed45d4924294a66d6264e1d59ca7:993849048249401377> ซื้อของด้วยอั่งเปา TrueWallet')
      .setDescription('<a:9717ed45d4924294a66d6264e1d59ca7:993849048249401377> อ่านก่อนเติมเงิน\n<:01:982915035187793981> เติมตามราคาสินค้า\n<:02:982915016644775976> บอทจะส่งสินค้าตามจำนวนเงินที่เติมเข้ามา\n<:03:982915052283772938> ไม่มีการคืนเงิน')
      .setImage('https://cdn.discordapp.com/attachments/969160095965540352/992866237744947280/unknown.png')
      .setFooter({ text: 'BOT BY KAMUISAD#9999', iconURL: 'https://cdn.discordapp.com/attachments/991453577098821722/994968327631933440/PREMIUM__SHOP_1.png' });
  const row = new Discord.ActionRowBuilder()
        .addComponents(
          new Discord.ButtonBuilder()
              .setCustomId('ซื้อของ')
              .setLabel('กดเพื่อซื้อสินค้า')
              .setEmoji("<a:972776912927735838:984440344462630962>")
              .setStyle(Discord.ButtonStyle.Success),
          new Discord.ButtonBuilder()
              .setCustomId("buycode")
              .setStyle(Discord.ButtonStyle.Secondary)
              .setLabel(`รายละเอียดสินค้า`)
              .setEmoji("<a:_verified_red_1:984456772968398878> "), 
          new Discord.ButtonBuilder()
              .setCustomId("bankb")
              .setStyle(Discord.ButtonStyle.Secondary)
              .setLabel(`ซื้อของผ่านธนาคาร`)
              .setEmoji("<:emoji_89:1008344014866632784> "), 
        );

  await interaction.channel.send({ embeds: [Embed], components: [row]})
},
};