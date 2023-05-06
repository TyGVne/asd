const { MessageEmbed } = require('discord.js'); // Importing MessageEmbed from Discord.js
const channelId = "1104077495214551161"; // Welcome ChannelID
const ruleId = "1104082255934140557"; // Rules ChannelID
const selfRoles = "1104082494917193758"; // Self Roles ChannelID

module.exports = (client) => {
client.on('guildMemberAdd', (member) => {
  const server_name = member.guild.name; // Server Name
  const server_icon = member.guild.iconURL({ dynamic: true, size: 512 }); // Server Icon
  const user = member; // Mentions the Member
  const user_avatar = member.user.displayAvatarURL({dynamic: true, size: 512}); // User's Avatar
  const username = member.user.username; // Shows Member's Username
  const tag = member.user.tag; // Shows Member's Username and Tag

  const message = `${user}`;
  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`Welcome to ${server_name}`)
  .setThumbnail(user_avatar)
  .setImage(server_icon)
  .setDescription('https://cdn.discordapp.com/attachments/697049699193978941/746691133660332092/divider_1.gif')
  .setDescription(`**<a:muiten:1104090822594527324> Hí Chiller ${member}!!** Cùng đến với khu vực của bọn mình <a:7ds_2hpe:1104091356617506868> \n \n <a:muiten:1104090822594527324> **Mong bạn** có trải nghiệm vui vẻ, giao lưu, hòa đồng <a:bantimne:1104092795737751664> \n \n <a:muiten:1104090822594527324> **Xem luật** ở đây nè <#1104082255934140557> <a:emoji_44:1104090756899151963> \n \n <a:muiten:1104090822594527324> **Pick Roles** tại đây nhé <#1104082494917193758> <a:laclac:1104091624142815263>`)
  .setFooter({
    text: `${server_name} | Bot by Tý Samaa#5555`,
    iconURL: server_icon
  });

    const channel = member.guild.channels.cache.get(channelId);
    channel.send({
        // content: message,
        embeds: [embed]
    });
    });
};
